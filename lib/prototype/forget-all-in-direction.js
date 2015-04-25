/**
 * Makes all history in a certain direction forgotten
 *
 * @param {String} `direction` The direction in which to forget
 *   @option `'forward'` [direction]
 *   @option `'backward'` [direction]
 * @api private
 * @since 3.1.0
 */
var forgetAllInDirection = function (direction) {
  var self = this
  var changesets = self.changesets

  if (!changesets.hasOwnProperty(direction)) {
    throw new Error('there is no such direction')
  }

  changesets[direction] = []
}

module.exports = forgetAllInDirection
