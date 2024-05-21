import * as _DashPlatformProtocol from '@dashevo/wasm-dpp';
import { Platform as PlatformClient } from '../Client/Platform/Platform';
export declare namespace Platform {
    const DashPlatformProtocol: typeof _DashPlatformProtocol;
    const initializeDppModule: typeof PlatformClient.initializeDppModule;
}
export { Platform as default };
