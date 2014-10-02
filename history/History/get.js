var clone = require("udc");

module.exports = function () {
    "use strict";
    var self = this;

    return clone(self.last);
};
