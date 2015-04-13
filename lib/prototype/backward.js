'use strict'

/**
 * Go back one history point
 *
 * @api public
 */

var backward = function () {
  var self = this

  self.move('backward')
}

module.exports = backward
