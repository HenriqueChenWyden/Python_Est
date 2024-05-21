const loadX11WasmModule = require('./wasm-build/x11-hash');
const wasmBuildBase64 = require('./wasm-build/x11-hash-wasm-base64');

const OUTPUT_HASH_SIZE = 32;

/**
 * @param bindings
 * @return {digest}
 */
const createDigest = (bindings) => {
  /**
   * @typedef {digest}
   * @param {string|Buffer|Uint8Array} input
   * @param {string} [encoding=utf8]
   * @return Buffer
   */
  const digest = (input, encoding = 'utf8') => {
    let inputBuffer;
    if (typeof input === 'string') {
      inputBuffer = Buffer.from(input, encoding);
    } else {
      inputBuffer = Buffer.from(input);
    }

    const output = new Uint8Array(OUTPUT_HASH_SIZE);

    const pIn = bindings.create_buffer(inputBuffer.byteLength);
    const pOut = bindings.create_buffer(OUTPUT_HASH_SIZE);

    bindings.wasmModule.HEAP8.set(inputBuffer, pIn);
    bindings.wasmModule.HEAP8.set(output, pOut);

    bindings.digest(pIn, pOut, input.length);

    const result = new Uint8Array(bindings.wasmModule.HEAP8.buffer, pOut, OUTPUT_HASH_SIZE);

    bindings.destroy_buffer(pIn);
    bindings.destroy_buffer(pOut);

    return Buffer.from(result);
  };
  return digest;
};

/**
 * @return {Promise<{ digest }>}
 */
module.exports = () => loadX11WasmModule({
  wasmBinary: Buffer.from(wasmBuildBase64, 'base64'),
}).then((wasmModule) => {
  const bindings = {
    digest: wasmModule.cwrap('digest', '', ['number', 'number', 'number']),
    create_buffer: wasmModule.cwrap('create_buffer', 'number', ['number']),
    destroy_buffer: wasmModule.cwrap('destroy_buffer', '', ['number']),
    wasmModule,
  };

  return {
    digest: createDigest(bindings),
  };
});
