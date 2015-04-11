/* eslint-env mocha */
var History = require('../../..')
var assert = require('proclaim')
var callNTimes = require('call-n-times')

describe('#lengthForward', function () {
  context('initially', function () {
    var history = new History({})
    it('returns 0', function () {
      assert.strictEqual(history.lengthForward(), 0)
    })
  })
  context('after going back one time', function () {
    var history = new History({})
    history.add({})
    history.backward()
    it('returns 1', function () {
      assert.strictEqual(history.lengthForward(), 1)
    })
  })
  context('after going back two times', function () {
    var history = new History({})
    callNTimes(function () {history.add({})}, 2)
    callNTimes(function () {history.backward()}, 2)
    it('returns 2', function () {
      assert.strictEqual(history.lengthForward(), 2)
    })
  })
  context('after going back three times', function () {
    var history = new History({})
    callNTimes(function () {history.add({})}, 3)
    callNTimes(function () {history.backward()}, 3)
    it('returns 3', function () {
      assert.strictEqual(history.lengthForward(), 3)
    })
  })
  context('after going back ten times', function () {
    var history = new History({})
    callNTimes(function () {history.add({})}, 10)
    callNTimes(function () {history.backward()}, 10)
    it('returns 10', function () {
      assert.strictEqual(history.lengthForward(), 10)
    })
  })
})
