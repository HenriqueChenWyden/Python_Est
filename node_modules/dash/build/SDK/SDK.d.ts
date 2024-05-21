/// <reference types="node" />
import { Wallet as _Wallet, Account as _Account, DerivableKeyChain as _KeyChain, utils as _WalletLibUtils, plugins as _WalletLibPlugins } from '@dashevo/wallet-lib';
import { Client as _Client } from './Client';
import { Core as _Core } from './Core';
import { Platform as _Platform } from './Platform';
import { StateTransitionBroadcastError } from '../errors/StateTransitionBroadcastError';
export declare namespace SDK {
    const DAPIClient: any;
    const Client: typeof _Client;
    const Core: typeof _Core;
    const Platform: typeof _Platform;
    const Wallet: typeof _Wallet;
    const Account: typeof _Account;
    const KeyChain: typeof _KeyChain;
    const WalletLib: {
        CONSTANTS: {
            BIP45: string;
            BIP44: string;
            DUFFS_PER_DASH: number;
            BIP44_ADDRESS_GAP: number;
            SECURE_TRANSACTION_CONFIRMATIONS_NB: number;
            BIP32__ROOT_PATH: string;
            BIP44_LIVENET_ROOT_PATH: string;
            BIP44_TESTNET_ROOT_PATH: string;
            DIP9_LIVENET_ROOT_PATH: string;
            DIP9_TESTNET_ROOT_PATH: string;
            UTXO_SELECTION_MAX_SINGLE_UTXO_FACTOR: number;
            UTXO_SELECTION_MIN_TX_AMOUNT_VS_UTXO_FACTOR: number;
            UTXO_SELECTION_MAX_FEE_VS_TX_AMOUNT_FACTOR: number;
            UTXO_SELECTION_MAX_FEE_VS_SINGLE_UTXO_FEE_FACTOR: number;
            MAX_STANDARD_TX_SIZE: number;
            MAX_P2SH_SIGOPS: number;
            COINBASE_MATURITY: number;
            UTXO_CHAINED_SPENDING_LIMIT_FOR_TX: number;
            FEES: {
                DUST_RELAY_TX_FEE: number;
                ZERO: number;
                ECONOMIC: number;
                NORMAL: number;
                PRIORITY: number;
                INSTANT_FEE_PER_INPUTS: number;
            };
            UNCONFIRMED_TRANSACTION_STATUS_CODE: number;
            WALLET_TYPES: {
                ADDRESS: string;
                PUBLICKEY: string;
                PRIVATEKEY: string;
                SINGLE_ADDRESS: string;
                HDWALLET: string;
                HDPRIVATE: string;
                HDPUBLIC: string;
            };
            INJECTION_LISTS: {
                SAFE_FUNCTIONS: string[];
                UNSAFE_FUNCTIONS: string[];
                UNSAFE_PROPERTIES: string[];
                SAFE_PROPERTIES: string[];
            };
            TRANSACTION_HISTORY_TYPES: {
                RECEIVED: string;
                SENT: string;
                ADDRESS_TRANSFER: string;
                ACCOUNT_TRANSFER: string;
                UNKNOWN: string;
            };
            STORAGE: {
                version: number;
                autosaveIntervalTime: number;
                REORG_SAFE_BLOCKS_COUNT: number;
            };
            TXIN_OUTPOINT_TXID_BYTES: number;
            TXIN_OUTPOINT_INDEX_BYTES: number;
            TXIN_SEQUENCE_BYTES: number;
            TXOUT_DUFFS_VALUE_BYTES: number;
            VERSION_BYTES: number;
            N_LOCKTIME_BYTES: number;
            BLOOM_FALSE_POSITIVE_RATE: number;
            NULL_HASH: string;
        };
        EVENTS: {
            PREFETCHED: string;
            CREATED: string;
            STARTED: string;
            READY: string;
            CONFIRMED_BALANCE_CHANGED: string;
            UNCONFIRMED_BALANCE_CHANGED: string;
            BLOCKHEIGHT_CHANGED: string;
            BLOCK: string;
            TRANSACTION: string;
            BLOCKHEADER: string;
            FETCHED_ADDRESS: string;
            ERROR_UPDATE_ADDRESS: string;
            FETCHED_TRANSACTION: string;
            FETCHED_UNCONFIRMED_TRANSACTION: string;
            FETCHED_CONFIRMED_TRANSACTION: string;
            CONFIRMED_TRANSACTION: string;
            GENERATED_ADDRESS: string;
            DISCOVERY_STARTED: string;
            CONFIGURED: string;
            INITIALIZED: string;
            SAVE_STATE_FAILED: string;
            SAVE_STATE_SUCCESS: string;
            REHYDRATE_STATE_FAILED: string;
            REHYDRATE_STATE_SUCCESS: string;
            INSTANT_LOCK: string;
            TX_METADATA: string;
            HEADERS_SYNC_PROGRESS: string;
            TRANSACTIONS_SYNC_PROGRESS: string;
        };
        plugins: typeof _WalletLibPlugins;
        utils: typeof _WalletLibUtils;
    };
    const PlatformProtocol: typeof import("@dashevo/wasm-dpp");
    const Essentials: {
        Buffer: typeof Buffer;
    };
    const Errors: {
        StateTransitionBroadcastError: typeof StateTransitionBroadcastError;
    };
}
export { SDK as default };
