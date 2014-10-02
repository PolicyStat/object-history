object-history
==============

JavaScript Object history (undo/redo)

## Behind the scenes

For cloning, [UltraDeepClone](https://github.com/imbcmdth/UltraDeepClone). For diff/apply, [changeset](https://github.com/eugeneware/changeset).

## Usage

```

var History = require("object-history");
var origin = {foo: "foo"};
var history = History(origin);

history.get();
// {foo: "foo"}

history.get() === origin;
// false

// It was cloned with `udc`.

history.add({foo: "bar"});
// 1

history.get();
// {foo: "bar"}

history.backward();
// 0

history.get();
// {foo: "foo"}

history.length
// 2

history.position
// 0

history.back();
// false

history.get();
// {foo: "foo"}

history.forward();
// 1

history.get();
// {foo: "bar"}

history.add({yad: "yad"});
// 2

history.back(0);
// 0

history.add({fab: "fab"});
// 1

history.length;
// 2

// `.add`ing removes forward history.

history.get(1); // Not yet implemented. Care to contribute?

```
