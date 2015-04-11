'use strict'
var _ = require('lodash')
var diff = require('changeset')
var clone = require('udc')

module.exports = function (obj) {
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
