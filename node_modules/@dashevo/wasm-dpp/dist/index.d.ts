import * as dpp_module from './dpp';
export * from './dpp';
export declare type DPPModule = typeof dpp_module;
export default function loadDpp(): Promise<DPPModule>;
