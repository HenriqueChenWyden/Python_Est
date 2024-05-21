import { Identifier } from '@dashevo/wasm-dpp';
import { Platform } from '../../Platform';
declare type ContractIdentifier = string | Identifier;
/**
 * Get contracts from the platform
 *
 * @param {ContractIdentifier} identifier - identifier of the contract to fetch
 * @param startAtMs
 * @param limit
 * @param offset
 * @returns contracts
 */
export declare function history(this: Platform, identifier: ContractIdentifier, startAtMs: number, limit: number, offset: number): Promise<any>;
export default history;
