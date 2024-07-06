[![Build and Deploy](https://github.com/atesgoral/hrm-level-outbox-generator/actions/workflows/test.yml/badge.svg)][1]

[1]: https://github.com/atesgoral/hrm-level-outbox-generator/actions/workflows/test.yml

# hrm-level-outbox-generator
Human Resource Machine inbox generator for testing and benchmarking solutions.

Generates the outbox that is expected for a given level and inbox.

## Methods

### .generate(levelNumber, inbox)

**levelNumber** - _Number_. The level number (1-41).

**inbox** - _Array_. The inbox contents. Must be suitable for the level. You can use [hrm-level-inbox-generator](https://github.com/atesgoral/hrm-level-inbox-generator), grab examples from [hrm-level-data](https://github.com/atesgoral/hrm-level-data) or simply craft your own input.

**returns** - _Array_. If the generator doesn't support the given level, a `null` is returned.

## Example

```js
var generator = require('hrm-level-outbox-generator');

// Tripler Room
var outbox = generator.generate(8, [ 2, 4, 0, -5 ]); // [ 6, 12, 0, -15 ]
```
