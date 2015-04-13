/* eslint-env mocha */
var assert = require('proclaim')
var History = require('../../..')
var MOCK_OBJECT = require('../mock-object')

describe('#add', function () {
  context('when first argument is not a plain object', function () {
    var ERROR_MESSAGE = require('../requires-plain-object-error')

    context('but undefined, for example', function () {
      var history = new History({})
      it('throws', function () {
        assert.throws(function () {
          history.add()
        }, ERROR_MESSAGE)
      })
    })
    context('but a string, for example', function () {
      var history = new History({})
      it('throws', function () {
        assert.throws(function () {
          history.add('a string')
        }, ERROR_MESSAGE)
      })
    })
  })
  context('when first argument is a plain object', function () {
    var history = new History({})
    it('does not throw', function () {
      assert.doesNotThrow(function () {
        history.add(MOCK_OBJECT)
      })
    })
    it('increments the return of #lengthBackward', function () {
      assert.strictEqual(history.lengthBackward(), 1)
    })
  })
  context('when there is forward history', function () {
    var history = new History({})
    history.add({})
    history.backward()
    it('does not throw', function () {
      assert.doesNotThrow(function () {
        history.add({})
      })
    })
    it('removes forward points', function () {
      assert.strictEqual(history.lengthForward(), 0)
      assert.throws(function () {
        history.forward()
      }, 'There\'s no going forward')
    })
  })
})
