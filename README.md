case-separated [![Code Climate](https://codeclimate.com/github/ileri/case-separated/badges/gpa.svg)](https://codeclimate.com/github/ileri/case-separated) [![Build Status](https://travis-ci.org/ileri/case-separated.svg)](https://travis-ci.org/ileri/case-separated)
==============
> Parse and stringify strings delimited by a certain string (such as _)

Install
--------------
```
$ npm install --save case-separated
```

Usage
--------------
```js
var CaseSeparated = require("case-camel"),
    caseSeparated = new CaseSeparated("-");

// parse
caseCamel.parse("this-is-an-example"); // ["this", "is", "an", "example"]

// stringify
caseCamel.stringify(["this", "is", "an", "example"]); // "this-is-an-example"

// check
caseCamel.is("this-is-an-example"); // true
caseCamel.is("thisIsAnExample"); // false
caseCamel.is("this"); // false
```
