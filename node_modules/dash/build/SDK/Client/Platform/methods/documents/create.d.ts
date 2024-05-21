import { ExtendedDocument } from '@dashevo/wasm-dpp';
import { Platform } from '../../Platform';
declare interface CreateOpts {
    [name: string]: any;
}
/**
 * Create and prepare documents for the platform
 *
 * @param {Platform} this - bound instance class
 * @param {string} typeLocator - type locator
 * @param identity - identity
 * @param {Object} [data] - options
 */
export declare function create(this: Platform, typeLocator: string, identity: any, data?: CreateOpts): Promise<ExtendedDocument>;
export default create;
