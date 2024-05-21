/// <reference types="node" />
import { DataContract, Identity, Identifier } from '@dashevo/wasm-dpp';
import Client from '../Client';
declare class StateRepository {
    private readonly client;
    constructor(client: Client);
    fetchIdentity(id: Identifier | string): Promise<Identity | null>;
    fetchDataContract(identifier: Identifier | string): Promise<DataContract | null>;
    isAssetLockTransactionOutPointAlreadyUsed(): Promise<boolean>;
    verifyInstantLock(): Promise<boolean>;
    fetchTransaction(id: string): Promise<{
        data: Buffer;
        height: number;
    }>;
    fetchLatestPlatformCoreChainLockedHeight(): Promise<number>;
}
export default StateRepository;
