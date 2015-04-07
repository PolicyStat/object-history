'use strict'

module.exports = function () {
  var self = this

  if (self.changesetsFore.length === 0) {
    throw new Error('there is no point to go forward to')
  }

  var diff = require('changeset')
  var apply = diff.apply

  var fore = apply(
    self.changesetsFore.pop(),
    self.last
  )

  self.changesetsBack.push(
    diff(
      fore,
      self.last
    )
  )

  self.last = fore
}
