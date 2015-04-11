'use strict'
var _ = require('lodash')
var diff = require('changeset')
var clone = require('udc')

/**
 * Add a history point object
 *
 * @param {Object} `obj` The history point
 * @api public
 *
 * ```js
 * history.add({
 *   foo: 'bar',
 *   bar: 'foo'
 * })
 * ```
 */

var add = function (obj) {
  var self = this

  if (!obj || !_.isPlainObject(obj)) {
    throw self.notObjError
  }

  if (self.lengthBackward() === self.options.limit) {
    self.changesetsBack.shift()
  }

  var changesetBack = diff(obj, self.last)
  self.changesetsBack.push(changesetBack)

  self.last = clone(obj)

  self.changesetsFore = []
}

module.exports = add
