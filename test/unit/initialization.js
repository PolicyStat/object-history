/* eslint-env mocha */
var assert = require('proclaim')

describe('initialization', function () {
  var History = require('../..')

  context('when first argument is not a plain object', function () {
    var ERROR_MESSAGE = require('./requires-plain-object-error')

    /* eslint-disable no-new */
    context('when no arguments', function () {
      it('should throw', function () {
        assert.throws(function () {
          new History()
        }, ERROR_MESSAGE)
      })
    })
    context('when first argument is an array', function () {
      it('should throw', function () {
        assert.throws(function () {
          new History([])
        }, ERROR_MESSAGE)
      })
    })
    /* eslint-enable no-new */
  })

  context('with a plain object', function () {
    it('initializes', function () {
      var history = new History({})
      assert.isInstanceOf(history, History)
    })
  })
})
