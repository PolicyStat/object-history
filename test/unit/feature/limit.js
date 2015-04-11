/* eslint-env mocha */
var assert = require('proclaim')
var History = require('../../..')
var MOCK_OBJECT = require('../mock-object')

describe('backwards history limit feature', function () {
  context('initializing with a limit', function () {
    var LIMIT = 3
    var history = new History({}, {limit: LIMIT})
    context('adding up to that limit', function () {
      it('#add does not throw', function () {
        assert.doesNotThrow(function () {
          history.add({})
          history.add({})
          history.add(MOCK_OBJECT) // used in assertion later
        })
      })
      it('#lengthBackward returns as usual', function () {
        assert.strictEqual(history.lengthBackward(), 3)
      })
    })
    context('adding beyond that limit', function () {
      context('adding one beyond that limit', function () {
        it('#add does not throw', function () {
          history.add({})
        })
        it('#lengthBackward returns as limited', function () {
          assert.strictEqual(history.lengthBackward(), LIMIT)
        })
      })
      context('adding more than one beyond that limit', function () {
        context('adding two beyond that limit', function () {
          it('#add does not throw', function () {
            history.add({})
          })
          it('#lengthBackward returns as limited', function () {
            assert.strictEqual(history.lengthBackward(), LIMIT)
          })
        })
        context('adding three beyond that limit', function () {
          it('#add does not throw', function () {
            history.add({})
          })
          it('#lengthBackward returns as limited', function () {
            assert.strictEqual(history.lengthBackward(), LIMIT)
          })
        })
      })
      context('going back', function () {
        it('#backward does not throw', function () {
          assert.doesNotThrow(history.backward.bind(history))
        })
        it('#lengthBackward returns one less (2)', function () {
          assert.strictEqual(history.lengthBackward(), 2)
        })
      })
      context('going back again', function () {
        it('#backward does not throw', function () {
          assert.doesNotThrow(history.backward.bind(history))
        })
        it('#lengthBackward returns one less again (1)', function () {
          assert.strictEqual(history.lengthBackward(), 1)
        })
      })
      context('going back all the way', function () {
        it('#backward does not throw', function () {
          assert.doesNotThrow(history.backward.bind(history))
        })
        it('#lengthBackward returns 0', function () {
          assert.strictEqual(history.lengthBackward(), 0)
        })
        it('#get returns the correct object', function () {
          assert.deepEqual(history.get(), MOCK_OBJECT)
        })
      })
    })
  })
})
