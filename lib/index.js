'use strict';

var _ = require('lodash');
var clone = require('udc');

module.exports = exports = function(initial) {
  var self = this;

  self.notObjError = new TypeError('Requires a plain object.');
  if (!_.isPlainObject(initial)) {throw self.notObjError;}

  self.first = clone(initial);
  self.last = clone(initial);
  self.changesetsBack = [];
  self.changesetsFore = [];

  return self;
};

module.exports.prototype.add = require('./prototype/add');
module.exports.prototype.get = require('./prototype/get');
module.exports.prototype.length = require('./prototype/length');
module.exports.prototype.position = require('./prototype/position');
module.exports.prototype.backward = require('./prototype/backward');
module.exports.prototype.forward = require('./prototype/forward');
