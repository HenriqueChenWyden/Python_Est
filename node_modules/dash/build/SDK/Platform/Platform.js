"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Platform = void 0;
// TODO remove default exports
// eslint-disable-next-line no-restricted-exports
var _DashPlatformProtocol = __importStar(require("@dashevo/wasm-dpp"));
var Platform_1 = require("../Client/Platform/Platform");
var Platform;
(function (Platform) {
    Platform.DashPlatformProtocol = _DashPlatformProtocol;
    Platform.initializeDppModule = Platform_1.Platform.initializeDppModule;
})(Platform = exports.Platform || (exports.Platform = {}));
exports.default = Platform;
//# sourceMappingURL=Platform.js.map