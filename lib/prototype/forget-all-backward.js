/**
 * Makes all backward history forgotten
 *
 * @api public
 * @since 3.1.0
 */
var forgetAllBackward = function () {
  var self = this

  self.forgetAllInDirection('backward')
}

module.exports = forgetAllBackward
