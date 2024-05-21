import { Identifier, Identity } from '@dashevo/wasm-dpp';
import { Platform } from '../../Platform';
export declare function creditTransfer(this: Platform, identity: Identity, recipientId: Identifier | string, amount: number): Promise<any>;
export default creditTransfer;
