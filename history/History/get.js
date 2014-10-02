var clone = require("udc");
var diff = require("changeset");

module.exports = function () {
    "use strict";
    var self = this;

    return clone(self.last);
};
