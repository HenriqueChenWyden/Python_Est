import { Platform } from '../../Platform';
import { QueryOptions } from '../../types';
/**
 * Get documents from the platform
 *
 * @param {Platform} this bound instance class
 * @param {string} typeLocator type locator
 * @param {QueryOptions} opts - MongoDB style query
 * @returns documents
 */
export declare function get(this: Platform, typeLocator: string, opts: QueryOptions): Promise<any>;
export default get;
