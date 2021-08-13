"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.capFirst = void 0;
const capFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.capFirst = capFirst;
const sum = (numArray) => {
    return numArray.reduce((acc, cur) => acc + cur, 0);
};
exports.sum = sum;
//# sourceMappingURL=util.js.map