"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTimeOutClientError = void 0;
const timeout_1 = require("../constants/timeout");
const isN_1 = require("./isN");
function isTimeOutClientError(val) {
    return (0, isN_1.isN)(timeout_1.TIMEOUT_ERROR_STATUS, val);
}
exports.isTimeOutClientError = isTimeOutClientError;
