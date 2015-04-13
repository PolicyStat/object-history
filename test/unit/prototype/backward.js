/* eslint-env mocha */
var History = require('../../..')
var assert = require('proclaim')
var MOCK_OBJECT = require('../mock-object')

describe('#backward', function () {
  context('initially', function () {
    var history = new History({})

    it('throws', function () {
      assert.throws(function () {
        history.backward()
      }, 'There\'s no going backward')
    })
  })
  context('when there is a point to go back to', function () {
    context('when there is one point to go back to', function () {
      var history = new History(MOCK_OBJECT)
      history.add({})
      it('does not throw', function () {
        assert.doesNotThrow(function () {
          history.backward()
        })
      })
      it('the next #get returns correctly', function () {
        assert.deepEqual(history.get(), MOCK_OBJECT)
      })
    })
    context('when there is more than one point to go back to', function () {
      context('when there are two points to go back to', function () {
        var history = new History(MOCK_OBJECT)
        history.add({})
        history.add({})
        it('does not throw', function () {
          assert.doesNotThrow(function () {
            history.backward()
          })
        })
        context('when it is called twice', function () {
          it('does not throw', function () {
            assert.doesNotThrow(function () {
              history.backward()
            })
          })
          it('the next #get returns correctly', function () {
            assert.deepEqual(history.get(), MOCK_OBJECT)
          })
        })
      })
    })
    context('when already called', function () {
      context('just now', function () {
        var history = new History(MOCK_OBJECT)
        history.add({})
        history.add({})
        history.backward()
        it('should not throw', function () {
          assert.doesNotThrow(function () {
            history.backward()
          })
        })
      })
    })
  })
})
