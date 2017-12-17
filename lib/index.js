'use strict';

const es6Exports = require('@std/esm')(module)('./index.mjs');

module.exports = es6Exports.default;
Object.defineProperties(module.exports, Object.getOwnPropertyDescriptors(es6Exports));
