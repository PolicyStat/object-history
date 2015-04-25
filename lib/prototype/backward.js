'use strict'

/**
 * Go back one history point
 *
 * @name backward
 * @api public
 */

module.exports = function () {
  var self = this

  self.move('backward')
}
