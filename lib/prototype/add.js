'use strict'
var _ = require('lodash')
var diff = require('changeset')
var clone = require('udc')

/**
 * Add a history point object
 *
 * ```js
 * history.add({
 *   foo: 'bar',
 *   bar: 'foo'
 * })
 * ```
 *
 * @param {Object} `obj` The history point
 * @api public
 */

var add = function (obj) {
  var self = this

  if (!obj || !_.isPlainObject(obj)) {
    throw self.notObjError
  }

  if (self.lengthBackward() === self.options.limit) {
    // limit reached. remove the oldest
    self.changesets.backward.shift()
  }

  self.changesets.backward.push(diff(obj, self.current))

  self.current = clone(obj)

  self.changesets.forward = []
}

module.exports = add
