"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStatusServerError = void 0;
const server_1 = require("../constants/server");
const isN_1 = require("./isN");
function isStatusServerError(val) {
    return (0, isN_1.isN)(server_1.SERVER_ERROR_STATUS, val);
}
exports.isStatusServerError = isStatusServerError;
