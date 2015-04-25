'use strict'

/**
 * @name lengthForward
 * @return {Number} Number of history points forward
 * @api public
 */

module.exports = function () {
  var self = this

  return self.changesets.forward.length
}
