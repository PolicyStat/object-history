'use strict'

var clone = require('udc')

/**
 * Get the "current" history point"
 *
 * @return {Object} "Current" history point
 * @api public
 */
var get = function () {
  var self = this

  return clone(self.current)
}

module.exports = get
