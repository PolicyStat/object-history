'use strict'

var _ = require('lodash')
var clone = require('udc')
var xtend = require('xtend')

/**
 * Gives birth to instances
 *
 * ```js
 * var History = require('object-history')
 * var initial = {foo: 'bar', name: 'victoria'}
 * var history = new History(initial)
 * ```
 *
 * @param {Object} `initial` The initial history point
 * @param {Object} `options` Optional [options](#constructor-options)
 * @constructor
 * @api public
 */

var History = function (initial, options) {
  var self = this
  self.options = xtend({
    limit: null
  }, options)

  self.notObjError = new Error('requires a plain object')
  if (!initial || !_.isPlainObject(initial)) {
    throw self.notObjError
  }

  self.current = clone(initial)
  self.changesets = {
    backward: [],
    forward: []
  }
}

History.prototype.add = require('./prototype/add')
History.prototype.get = require('./prototype/get')
History.prototype.lengthBackward = require('./prototype/length-backward')
History.prototype.lengthForward = require('./prototype/length-forward')
History.prototype.backward = require('./prototype/backward')
History.prototype.forward = require('./prototype/forward')
History.prototype.move = require('./prototype/move')
History.prototype.forgetAllInDirection = require('./prototype/forget-all-in-direction')
History.prototype.forgetAllBackward = require('./prototype/forget-all-backward')
History.prototype.forgetAllForward = require('./prototype/forget-all-forward')

module.exports = History
