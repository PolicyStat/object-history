'use strict'

/**
 * @return {Number} Number of history points backwards
 * @api public
 */

var lengthBackward = function () {
  var self = this

  return self.changesetsBack.length
}

module.exports = lengthBackward
