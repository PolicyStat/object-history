/* eslint-env mocha */
var History = require('../../..')
var assert = require('proclaim')
var MOCK_OBJECT = require('../mock-object')

describe('#forward', function () {
  context('initially', function () {
    var history = new History({})
    it('throws', function () {
      assert.throws(function () {
        history.forward()
      }, 'There\'s no going forward')
    })
  })
  context('when there is a point to go forward to', function () {
    context('when there is one point to go forward to', function () {
      var history = new History({})
      history.add(MOCK_OBJECT)
      history.backward()
      it('does not throw', function () {
        assert.doesNotThrow(function () {
          history.forward()
        })
      })
      it('the next #get returns correctly', function () {
        assert.deepEqual(history.get(), MOCK_OBJECT)
      })
    })
    context('when there is more than one point to go forward to', function () {
      context('when there are two points to go forward to', function () {
        var history = new History({})
        history.add({})
        history.add(MOCK_OBJECT)
        history.backward()
        history.backward()
        it('does not throw', function () {
          assert.doesNotThrow(function () {
            history.forward()
          })
        })
        context('when it is called twice', function () {
          it('does not throw', function () {
            assert.doesNotThrow(function () {
              history.forward()
            })
          })
          it('the next #get returns correctly', function () {
            assert.deepEqual(history.get(), MOCK_OBJECT)
          })
        })
      })
    })
  })
})
