'use strict'

/**
 * Makes all backward history forgotten
 *
 * @name forgetAllBackward
 * @api public
 * @since 3.1.0
 */

module.exports = function () {
  var self = this

  self.forgetAllInDirection('backward')
}
