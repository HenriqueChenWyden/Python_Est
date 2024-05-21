# dash-util

[![npm version](https://img.shields.io/npm/v/dash-util.svg)](https://www.npmjs.com/package/@dashevo/dash-util)
[![Build Status](https://travis-ci.org/dashpay/dash-util.svg?branch=master)](https://travis-ci.org/dashevo/dash-util)
[![Dependency Status](https://david-dm.org/dashpay/dash-util.svg)](https://david-dm.org/dashevo/dash-util)

**Utility functions for Dash hashes and targets**

## Usage

`npm install @dashevo/dash-util`

### Methods

#### `toHash(hex)`

Takes a hex string that contains a Dash hash as input, and returns a Dash-protocol-friendly little-endian Buffer. Throws an error if the hex string is not of length 64 (representing a 256-bit hash).

#### `compressTarget(target)`

Converts the difficulty target `target` to its compact representation (used in the "bits" field in block headers). `target` should be a `Buffer` (little-endian, the zeroes should be at the end). Returns a `number`.

#### `expandTarget(bits)`

Converts the compressed target integer `bits` to its target hash representation. Returns a `Buffer`.
