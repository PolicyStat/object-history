/* eslint-env mocha */
var History = require('../../..')
var assert = require('proclaim')

describe('#get', function () {
  context('initially', function () {
    var original = {name: 'foo'}
    var history = new History(original)
    var got = history.get()

    it('returns a clone', function () {
      assert.notEqual(got, original, 'not the original')
      assert.deepEqual(got, original, 'identical clone')
    })
  })
  context('after a point was added', function () {
    var history = new History({})
    var point = {name: 'bar'}
    history.add(point)

    it('returns a clone of it', function () {
      assert.notEqual(history.get(), point, 'not the point')
      assert.deepEqual(history.get(), point, 'identical clone')
    })
  })
  context('after going back', function () {
    var original = {name: 'foo'}
    var history = new History(original)
    history.add({})
    history.backward()
    it('returns the correct object', function () {
      assert.deepEqual(history.get(), original)
    })
  })
  context('after going forward', function () {
    var history = new History({})
    var point = {name: 'foor'}
    history.add(point)
    history.backward()
    history.forward()
    it('returns the correct object', function () {
      assert.deepEqual(history.get(), point)
    })
  })
})
