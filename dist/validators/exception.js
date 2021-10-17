"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EXCEPTIONS = exports.Exception = void 0;
const constants_1 = require("../constants");
class Exception {
    constructor(status) {
        this.status = status;
    }
    toString() {
        return `Exception with status : ${this.status.toLocaleString()}`;
    }
}
exports.Exception = Exception;
exports.EXCEPTIONS = constants_1.EXCEPTION_CODES.reduce((acc, curr) => ({
    ...acc,
    [curr]: new Exception(curr),
}), {});
const ert = exports.EXCEPTIONS[434]; /* as Required<ExceptionObject> */
console.log('ert', '=>', ert.toString());
