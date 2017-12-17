# case-separated [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> Parse and stringify strings delimited by a certain string (such as \_)

## Installation

```sh
$ npm install --save case-separated
```

## Usage

```js
const CaseSeparated = require("case-separated");
const caseSeparated = new CaseSeparated("-");

// parse
caseSeparated.parse("this-is-an-example"); // ['this', 'is', 'an', 'example']

// stringify
caseSeparated.stringify(["this", "is", "an", "example"]); // 'this-is-an-example'

// check
caseSeparated.is("this-is-an-example"); // true
caseSeparated.is("thisIsAnExample"); // false
caseSeparated.is("this"); // false
```

## License

MIT © [Malte-Maurice Dreyer](https://github.com/Myhlamaeus)

[npm-image]: https://badge.fury.io/js/case-separated.svg
[npm-url]: https://npmjs.org/package/case-separated
[travis-image]: https://travis-ci.org/Myhlamaeus/case-separated.svg?branch=master
[travis-url]: https://travis-ci.org/Myhlamaeus/case-separated
[daviddm-image]: https://david-dm.org/Myhlamaeus/case-separated.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Myhlamaeus/case-separated
[coveralls-image]: https://coveralls.io/repos/Myhlamaeus/case-separated/badge.svg
[coveralls-url]: https://coveralls.io/r/Myhlamaeus/case-separated
