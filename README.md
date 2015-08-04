# Typer
A small module that allows you to do simple type casting and detecting.

## Installation
`npm i --save typer`

## Usage
Usage is pretty simple. First, require typer and then use one of the documented methods.

### .detect(value)
Detect the type of `value`.

```javascript
var typer = require('typer');

console.log(typer.detect('12345.12')); // float
console.log(typer.detect('12345')); // integer
console.log(typer.detect('false')); // boolean
```

You can find more examples in the tests.

### .cast(value, type='smart')
Cast `value` to `type`.

```javascript
var typer = require('typer');

console.log(typer.cast(23, 'string')); // '23'
console.log(typer.cast('23', 'integer')); // 23
console.log(typer.cast('23', 'float')); // 23.00
