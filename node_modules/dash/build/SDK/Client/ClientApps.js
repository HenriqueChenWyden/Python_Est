"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientApps = void 0;
var wasm_dpp_1 = require("@dashevo/wasm-dpp");
var ClientApps = /** @class */ (function () {
    function ClientApps(apps) {
        var _this = this;
        if (apps === void 0) { apps = {}; }
        this.apps = {};
        Object.entries(apps).forEach(function (_a) {
            var name = _a[0], definition = _a[1];
            return _this.set(name, definition);
        });
    }
    /**
       * Set app
       *
       * @param {string} name
       * @param {ClientAppDefinitionOptions} options
       */
    ClientApps.prototype.set = function (name, options) {
        this.apps[name] = {
            contractId: wasm_dpp_1.Identifier.from(options.contractId),
            contract: options.contract,
        };
    };
    /**
       * Get app definition by name
       *
       * @param {string} name
       * @return {ClientAppDefinition}
       */
    ClientApps.prototype.get = function (name) {
        if (!this.has(name)) {
            throw new Error("Application with name " + name + " is not defined");
        }
        return this.apps[name];
    };
    /**
       * Check if app is defined
       *
       * @param {string} name
       * @return {boolean}
       */
    ClientApps.prototype.has = function (name) {
        return Boolean(this.apps[name]);
    };
    /**
       * Get all apps
       *
       * @return {ClientAppsList}
       */
    ClientApps.prototype.getNames = function () {
        return Object.keys(this.apps);
    };
    return ClientApps;
}());
exports.ClientApps = ClientApps;
//# sourceMappingURL=ClientApps.js.map