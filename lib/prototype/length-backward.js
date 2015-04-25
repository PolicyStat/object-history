'use strict'

/**
 * @name lengthBackward
 * @return {Number} Number of history points backwards
 * @api public
 */

module.exports = function () {
  var self = this

  return self.changesets.backward.length
}
