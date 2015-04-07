'use strict'

module.exports = function () {
  var self = this
  var diff
  var back
  var apply

  if (self.changesetsBack.length === 0) {
    throw new Error('no point to go back to')
  }

  diff = require('changeset')
  apply = diff.apply

  back = apply(
    self.changesetsBack.pop(),
    self.last
  )

  self.changesetsFore.push(
    diff(
      back,
      self.last
    )
  )

  self.last = back
}
