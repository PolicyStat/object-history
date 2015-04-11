# object-history [![NPM version](https://badge.fury.io/js/object-history.svg)](http://badge.fury.io/js/object-history)  [![Build Status](https://travis-ci.org/PolicyStat/object-history.svg)](https://travis-ci.org/PolicyStat/object-history)  [![js-standard-style](https://raw.githubusercontent.com/feross/standard/master/badge.png)](https://github.com/feross/standard)

JavaScript Object history

## Behind the scenes

For cloning, [UltraDeepClone](https://github.com/imbcmdth/UltraDeepClone). For diff/apply, [changeset](https://github.com/eugeneware/changeset).

## Old browsers

Works in IE8 with `es5-shim`. Perhaps IE7, as well.

## Constructor

### [History](./lib/index.js#L22)

Gives birth to instances

* `initial` **{Object}**: The initial history point    
* `options` **{Object}**: Optional [options](#options)    

```js
var History = require('object-history')
var initial = {foo: 'bar', name: 'victoria'}
var history = new History(initial)
```


## Constructor options

`limit`
  Optional. Provide a number of backwards history points to keep.
  Older than this number will be forgotten and hopefully their allocated memory will be reclaimed.

## Methods

### [add](./lib/prototype/add.js#L20)

* `obj` **{Object}**: The history point    

Add a history point object
### [backward](./lib/prototype/backward.js#L9)


Go back one history point
### [forward](./lib/prototype/forward.js#L9)


Go forward one history point
### [get](./lib/prototype/get.js#L12)

* `returns` **{Object}**: "Current" history point  

Get the "current" history point"
### [lengthBackward](./lib/prototype/length-backward.js#L8)

* `returns` **{Number}**: Number of history points backwards
### [lengthForward](./lib/prototype/length-forward.js#L8)

* `returns` **{Number}**: Number of history points forward

## Copyright

Copyright © 2015 PolicyStat LLC
