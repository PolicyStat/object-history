/* eslint-env mocha */
var History = require('../../..')
var assert = require('proclaim')
var times = require('lodash').times

describe('#lengthBackward', function () {
  context('initially', function () {
    var history = new History({})
    it('returns 0', function () {
      assert.equal(history.lengthBackward(), 0)
    })
  })
  context('after a point was added', function () {
    var history = new History({})
    history.add({})
    it('returns 1', function () {
      assert.strictEqual(history.lengthBackward(), 1)
    })
  })
  context('after adding two points', function () {
    var history = new History({})
    times(2, function () {history.add({})})
    it('returns 2', function () {
      assert.strictEqual(history.lengthBackward(), 2)
    })
  })
  context('after adding three points', function () {
    var history = new History({})
    times(3, function () {history.add({})})
    it('returns 3', function () {
      assert.strictEqual(history.lengthBackward(), 3)
    })
  })
  context('after adding ten points', function () {
    var history = new History({})
    times(10, function () {history.add({})})
    it('returns 10', function () {
      assert.strictEqual(history.lengthBackward(), 10)
    })
  })
})
