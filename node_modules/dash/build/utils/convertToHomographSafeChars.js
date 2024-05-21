"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {string} input
 * @return {string}
 */
function convertToHomographSafeChars(input) {
    return input.toLowerCase().replace(/[oli]/g, function (match) {
        if (match === 'o') {
            return '0';
        }
        if (match === 'l' || match === 'i') {
            return '1';
        }
        return match;
    });
}
exports.default = convertToHomographSafeChars;
//# sourceMappingURL=convertToHomographSafeChars.js.map