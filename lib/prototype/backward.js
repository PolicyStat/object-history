'use strict'

/**
 * Go back one history point
 *
 * @api public
 */

var backward = function () {
  var self = this

  if (self.changesetsBack.length === 0) {
    throw new Error('no point to go back to')
  }

  var diff = require('changeset')
  var apply = diff.apply

  var back = apply(
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

module.exports = backward
