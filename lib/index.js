'use strict'

var _ = require('lodash')
var clone = require('udc')
var xtend = require('xtend')

module.exports = function (initial, options) {
  var self = this
  self.options = xtend({
    limit: null
  }, options)

  self.notObjError = new Error('requires a plain object')
  if (!initial || !_.isPlainObject(initial)) {
    throw self.notObjError
  }

  self.first = clone(initial)
  self.last = clone(initial)
  self.changesetsBack = []
  self.changesetsFore = []
}

module.exports.prototype.add = require('./prototype/add')
module.exports.prototype.get = require('./prototype/get')
module.exports.prototype.lengthBackward = require('./prototype/length-backward')
module.exports.prototype.lengthForward = require('./prototype/length-forward')
module.exports.prototype.backward = require('./prototype/backward')
module.exports.prototype.forward = require('./prototype/forward')
