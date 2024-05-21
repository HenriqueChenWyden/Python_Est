# wasm-x11-hash
[![NPM Version](https://img.shields.io/npm/v/wasm-x11-hash)](https://www.npmjs.com/package/wasm-x11-hash)
[![Build Status](https://github.com/dashevo/wasm-x11-hash/actions/workflows/test_and_release.yml/badge.svg)](https://github.com/dashevo/wasm-x11-hash/actions/workflows/test_and_release.yml)
[![Release Date](https://img.shields.io/github/release-date/dashevo/wasm-x11-hash)](https://github.com/dashevo/wasm-x11-hash/releases/latest)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen)](https://github.com/RichardLitt/standard-readme)

WASM binding for X11 hashing algorithm written in C

## Installation and usage
_[Buffer](https://github.com/feross/buffer) polyfill is required for usage in browsers_
- `$ npm install wasm-x11-hash`

```javascript
const X11 = require('wasm-x11-hash');

X11().then(x11 => {
  const hash = x11.digest('hello world')
});
```

## Build and test
_Docker v20+ is required_

- `$ npm run build`
- `$ npm run test`

