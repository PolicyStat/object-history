'use strict'

var clone = require('udc')

/**
 * @name get
 * @return {Object} "Current" history point
 * @api public
 */

module.exports = function () {
  var self = this

  return clone(self.current)
}
