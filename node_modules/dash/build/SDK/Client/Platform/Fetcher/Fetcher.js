"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NotFoundError_1 = __importDefault(require("@dashevo/dapi-client/lib/transport/GrpcTransport/errors/NotFoundError"));
var withRetry_1 = __importDefault(require("./withRetry"));
var DEFAULT_DELAY_MUL_MS = 1000;
var DEFAULT_MAX_ATTEMPTS = 7;
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
var Fetcher = /** @class */ (function () {
    function Fetcher(dapiClient, options) {
        if (options === void 0) { options = {}; }
        this.dapiClient = dapiClient;
        this.acknowledgedKeys = new Set();
        this.delayMulMs = typeof options.delayMulMs === 'number'
            ? options.delayMulMs : DEFAULT_DELAY_MUL_MS;
        this.maxAttempts = typeof options.maxAttempts === 'number'
            ? options.maxAttempts : DEFAULT_MAX_ATTEMPTS;
    }
    /**
     * Acknowledges DPP Identifier to retry on it in get methods
     * @param identifier
     */
    Fetcher.prototype.acknowledgeIdentifier = function (identifier) {
        this.acknowledgedKeys.add(identifier.toString());
    };
    /**
     * Acknowledges string key to retry on it in get methods
     * @param key
     */
    Fetcher.prototype.acknowledgeKey = function (key) {
        this.acknowledgedKeys.add(key);
    };
    /**
     * Forgets string key to stop retrying on it in get methods
     * @param key
     */
    Fetcher.prototype.forgetKey = function (key) {
        this.acknowledgedKeys.delete(key);
    };
    /**
     * Checks if identifier was acknowledged
     * @param identifier
     */
    Fetcher.prototype.hasIdentifier = function (identifier) {
        return this.acknowledgedKeys.has(identifier.toString());
    };
    Fetcher.prototype.hasKey = function (key) {
        return this.acknowledgedKeys.has(key);
    };
    /**
     * Fetches identity by it's ID
     * @param id
     */
    Fetcher.prototype.fetchIdentity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var query, retryAttempts;
            var _this = this;
            return __generator(this, function (_a) {
                query = function () { return __awaiter(_this, void 0, void 0, function () {
                    var platform;
                    return __generator(this, function (_a) {
                        platform = this.dapiClient.platform;
                        return [2 /*return*/, platform.getIdentity(id)];
                    });
                }); };
                retryAttempts = this.hasIdentifier(id) ? this.maxAttempts : 1;
                return [2 /*return*/, withRetry_1.default(query, retryAttempts, this.delayMulMs)];
            });
        });
    };
    /**
     * Fetches data contract by it's ID
     * @param id
     */
    Fetcher.prototype.fetchDataContract = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var query, retryAttempts;
            var _this = this;
            return __generator(this, function (_a) {
                query = function () { return __awaiter(_this, void 0, void 0, function () {
                    var platform;
                    return __generator(this, function (_a) {
                        platform = this.dapiClient.platform;
                        return [2 /*return*/, platform.getDataContract(id)];
                    });
                }); };
                retryAttempts = this.hasIdentifier(id) ? this.maxAttempts : 1;
                return [2 /*return*/, withRetry_1.default(query, retryAttempts, this.delayMulMs)];
            });
        });
    };
    /**
     * Fetches data contract by it's ID
     * @param id
     * @param startAMs
     * @param limit
     * @param offset
     */
    Fetcher.prototype.fetchDataContractHistory = function (id, startAMs, limit, offset) {
        return __awaiter(this, void 0, void 0, function () {
            var query, retryAttempts;
            var _this = this;
            return __generator(this, function (_a) {
                query = function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this
                                    .dapiClient.platform.getDataContractHistory(id, startAMs, limit, offset)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); };
                retryAttempts = this.hasIdentifier(id) ? this.maxAttempts : 1;
                return [2 /*return*/, withRetry_1.default(query, retryAttempts, this.delayMulMs)];
            });
        });
    };
    /**
     * Fetches documents by data contract id and type
     * @param {Identifier} contractId - data contract ID
     * @param {string} type - document name
     * @param {QueryOptions} opts - query
     */
    Fetcher.prototype.fetchDocuments = function (contractId, type, opts) {
        return __awaiter(this, void 0, void 0, function () {
            var query, documentLocator, retryAttempts;
            var _this = this;
            return __generator(this, function (_a) {
                query = function () { return __awaiter(_this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.dapiClient.platform
                                    .getDocuments(contractId, type, opts)];
                            case 1:
                                result = _a.sent();
                                if (result.getDocuments().length === 0) {
                                    throw new NotFoundError_1.default("Documents of type \"" + type + "\" not found for the data contract " + contractId);
                                }
                                return [2 /*return*/, result];
                        }
                    });
                }); };
                documentLocator = contractId.toString() + "/" + type;
                retryAttempts = this.hasKey(documentLocator) ? this.maxAttempts : 1;
                return [2 /*return*/, withRetry_1.default(query, retryAttempts, this.delayMulMs)];
            });
        });
    };
    return Fetcher;
}());
exports.default = Fetcher;
//# sourceMappingURL=Fetcher.js.map