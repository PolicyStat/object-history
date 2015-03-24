'use strict'

var clone = require('udc')

module.exports = function () {
  var self = this

  return clone(self.last)
}
