var _ = require("lodash");
var clone = require("udc");

module.exports = exports = function (initial) {
    "use strict";
    var self = this;

    self.notObjError = new TypeError("Requires a plain object.");
    if (!_.isPlainObject(initial)) {throw self.notObjError;}

    self.first = clone(initial);
    self.last = clone(initial);
    self.changesetsBack = [];
    self.changesetsFore = [];
    self.currentPosition = 0;

    return self;
};

module.exports.prototype.add = require("./add");
module.exports.prototype.get = require("./get");
module.exports.prototype.length = require("./length");
module.exports.prototype.position = require("./position");
module.exports.prototype.backward = require("./back");
