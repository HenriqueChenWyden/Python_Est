import DAPIClient from '@dashevo/dapi-client';
import { Identifier } from '@dashevo/wasm-dpp/dist';
import { GetDataContractResponse } from '@dashevo/dapi-client/lib/methods/platform/getDataContract/GetDataContractResponse';
import { GetIdentityResponse } from '@dashevo/dapi-client/lib/methods/platform/getIdentity/GetIdentityResponse';
import { GetDocumentsResponse } from '@dashevo/dapi-client/lib/methods/platform/getDocuments/GetDocumentsResponse';
import { GetDataContractHistoryResponse } from '@dashevo/dapi-client/lib/methods/platform/getDataContractHistory/GetDataContractHistoryResponse';
import { QueryOptions } from '../types';
declare type FetcherOptions = {
    /**
     * Multiplier for delay between retry attempts
     */
    delayMulMs?: number;
    /**
     * Maximum number of retry attempts
     */
    maxAttempts?: number;
};
/**
 * Fetcher class that handles retry attempts for acknowledged identifiers
 * Primary goal of this class is to mitigate network propagation lag
 * where we query platform entities right after their creation
 *
 * Should be used until fully functioning state transition acknowledgement is implemented
 *
 * Note: possible collisions of acknowledged keys
 * should be resolved externally by user of this class
 */
declare class Fetcher {
    dapiClient: DAPIClient;
    private acknowledgedKeys;
    readonly delayMulMs: number;
    readonly maxAttempts: number;
    constructor(dapiClient: DAPIClient, options?: FetcherOptions);
    /**
     * Acknowledges DPP Identifier to retry on it in get methods
     * @param identifier
     */
    acknowledgeIdentifier(identifier: Identifier): void;
    /**
     * Acknowledges string key to retry on it in get methods
     * @param key
     */
    acknowledgeKey(key: string): void;
    /**
     * Forgets string key to stop retrying on it in get methods
     * @param key
     */
    forgetKey(key: string): void;
    /**
     * Checks if identifier was acknowledged
     * @param identifier
     */
    hasIdentifier(identifier: Identifier): boolean;
    hasKey(key: string): boolean;
    /**
     * Fetches identity by it's ID
     * @param id
     */
    fetchIdentity(id: Identifier): Promise<GetIdentityResponse>;
    /**
     * Fetches data contract by it's ID
     * @param id
     */
    fetchDataContract(id: Identifier): Promise<GetDataContractResponse>;
    /**
     * Fetches data contract by it's ID
     * @param id
     * @param startAMs
     * @param limit
     * @param offset
     */
    fetchDataContractHistory(id: Identifier, startAMs: number, limit: number, offset: number): Promise<GetDataContractHistoryResponse>;
    /**
     * Fetches documents by data contract id and type
     * @param {Identifier} contractId - data contract ID
     * @param {string} type - document name
     * @param {QueryOptions} opts - query
     */
    fetchDocuments(contractId: Identifier, type: string, opts: QueryOptions): Promise<GetDocumentsResponse>;
}
export default Fetcher;
