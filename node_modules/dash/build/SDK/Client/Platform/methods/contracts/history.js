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
Object.defineProperty(exports, "__esModule", { value: true });
exports.history = void 0;
// @ts-ignore
var wasm_dpp_1 = require("@dashevo/wasm-dpp");
var NotFoundError = require('@dashevo/dapi-client/lib/transport/GrpcTransport/errors/NotFoundError');
/**
 * Get contracts from the platform
 *
 * @param {ContractIdentifier} identifier - identifier of the contract to fetch
 * @param startAtMs
 * @param limit
 * @param offset
 * @returns contracts
 */
function history(identifier, startAtMs, limit, offset) {
    return __awaiter(this, void 0, void 0, function () {
        var contractId, dataContractHistoryResponse, e_1, rawContractHistory, contractHistory, _i, _a, _b, date, contractBytes, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    this.logger.debug("[Contracts#history] Get Data Contract History for \"" + identifier + "\"");
                    return [4 /*yield*/, this.initialize()];
                case 1:
                    _e.sent();
                    contractId = wasm_dpp_1.Identifier.from(identifier);
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, this.fetcher
                            .fetchDataContractHistory(contractId, startAtMs, limit, offset)];
                case 3:
                    dataContractHistoryResponse = _e.sent();
                    this.logger.silly("[Contracts#history] Fetched Data Contract History for \"" + identifier + "\"");
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _e.sent();
                    if (e_1 instanceof NotFoundError) {
                        return [2 /*return*/, null];
                    }
                    throw e_1;
                case 5:
                    rawContractHistory = dataContractHistoryResponse.getDataContractHistory();
                    contractHistory = {};
                    _i = 0, _a = Object.entries(rawContractHistory);
                    _e.label = 6;
                case 6:
                    if (!(_i < _a.length)) return [3 /*break*/, 9];
                    _b = _a[_i], date = _b[0], contractBytes = _b[1];
                    _c = contractHistory;
                    _d = date;
                    return [4 /*yield*/, this.dpp.dataContract
                            .createFromBuffer(contractBytes)];
                case 7:
                    _c[_d] = _e.sent();
                    _e.label = 8;
                case 8:
                    _i++;
                    return [3 /*break*/, 6];
                case 9:
                    this.logger.debug("[Contracts#history] Obtained Data Contract history for \"" + identifier + "\"");
                    return [2 /*return*/, contractHistory];
            }
        });
    });
}
exports.history = history;
exports.default = history;
//# sourceMappingURL=history.js.map