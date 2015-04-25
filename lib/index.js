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
 * var history = new History(initial, {limit: 33})
 * ```
 *
 * @name History
 * @param {Object} `initial` The initial history point
 * @param {Object} `options` `limit`: `{Number}` Remember this many backward points
 * @constructor
 * @api public
 */

module.exports = function (initial, options) {
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

var proto = module.exports.prototype

proto.add = require('./prototype/add')
proto.get = require('./prototype/get')
proto.lengthBackward = require('./prototype/length-backward')
proto.lengthForward = require('./prototype/length-forward')
proto.backward = require('./prototype/backward')
proto.forward = require('./prototype/forward')
proto.move = require('./prototype/move')
proto.forgetAllInDirection = require('./prototype/forget-all-in-direction')
proto.forgetAllBackward = require('./prototype/forget-all-backward')
proto.forgetAllForward = require('./prototype/forget-all-forward')
