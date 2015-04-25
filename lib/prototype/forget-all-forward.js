'use strict'

/**
 * Makes all forward history forgotten
 *
 * @name forgetAllForward
 * @api public
 * @since 3.1.0
 */

module.exports = function () {
  var self = this

  self.forgetAllInDirection('forward')
}
