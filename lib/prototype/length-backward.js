'use strict'

/**
 * @return {Number} Number of history points backwards
 * @api public
 */

var lengthBackward = function () {
  var self = this

  return self.changesets.backward.length
}

module.exports = lengthBackward
