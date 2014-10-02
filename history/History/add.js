var _ = require("lodash");
var diff = require("changeset");
var clone = require("udc");

module.exports = function (obj) {
    "use strict";
    var self = this,
        changesetBack;

    if (!_.isPlainObject(obj)) {throw self.notObjError;}

    changesetBack = diff(obj, self.last);
    self.changesetsBack.push(changesetBack);

    self.last = clone(obj);

    self.changesetsFore = [];

    return self.position();
};
