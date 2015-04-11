/* eslint-env mocha */
var History = require('../../..')
var assert = require('proclaim')
var callNTimes = require('call-n-times')

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
    callNTimes(function () {history.add({})}, 2)
    it('returns 2', function () {
      assert.strictEqual(history.lengthBackward(), 2)
    })
  })
  context('after adding three points', function () {
    var history = new History({})
    callNTimes(function () {history.add({})}, 3)
    it('returns 3', function () {
      assert.strictEqual(history.lengthBackward(), 3)
    })
  })
  context('after adding ten points', function () {
    var history = new History({})
    callNTimes(function () {history.add({})}, 10)
    it('returns 10', function () {
      assert.strictEqual(history.lengthBackward(), 10)
    })
  })
})
