import { ExtendedDocument } from '@dashevo/wasm-dpp';
import { Platform } from '../../Platform';
/**
 * Broadcast document onto the platform
 *
 * @param {Platform} this - bound instance class
 * @param {Object} documents
 * @param {ExtendedDocument[]} [documents.create]
 * @param {ExtendedDocument[]} [documents.replace]
 * @param {ExtendedDocument[]} [documents.delete]
 * @param identity - identity
 */
export default function broadcast(this: Platform, documents: {
    create?: ExtendedDocument[];
    replace?: ExtendedDocument[];
    delete?: ExtendedDocument[];
}, identity: any): Promise<any>;
