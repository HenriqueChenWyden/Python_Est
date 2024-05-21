import { Identifier } from '@dashevo/wasm-dpp';
import { Platform } from '../../Platform';
/**
 * Get an identity from the platform
 *
 * @param {Platform} this - bound instance class
 * @param {string|Identifier} id - id
 * @returns Identity
 */
export declare function get(this: Platform, id: Identifier | string): Promise<any>;
export default get;
