/**
 * Makes all forward history forgotten
 *
 * @api public
 * @since 3.1.0
 */
var forgetAllForward = function () {
  var self = this

  self.forgetAll('forward')
}

module.exports = forgetAllForward
