'use strict'

/**
 * @return {Number} Number of history points forward
 * @api public
 */

var lengthForward = function () {
  var self = this

  return self.changesetsFore.length
}

module.exports = lengthForward
