'use strict'
var diff = require('changeset')
var apply = diff.apply
var without = require('lodash').without

/**
 * Move forward or backwards
 *
 * @api private
 * @param {String} `direction` direction of movement either `'backward'` or `'forward'`
 */

var move = function (direction) {
  var self = this

  if (!direction || !self.changesets.hasOwnProperty(direction)) {
    throw new Error('Invalid direction')
  }

  // get the reverse direction name
  var directions = Object.getOwnPropertyNames(self.changesets)
  var reverseDirection = without(directions, direction)[0]

  // the directions will refer to the arrays of changesets
  var changesets = self.changesets[direction]
  var reverseChangesets = self.changesets[reverseDirection]

  if (changesets.length === 0) {
    throw new Error('There\'s no going ' + direction)
  }

  // create the new object by applying the last changeset from
  // this direction on the current object. this will be our new current
  var newCurrent = apply(changesets.pop(), self.current)

  // push to the reverse direction a changeset from the new object
  // to the current object so that we could go back
  reverseChangesets.push(diff(newCurrent, self.current))

  self.current = newCurrent
}

module.exports = move
