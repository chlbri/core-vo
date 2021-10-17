"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStatusClientError = void 0;
const client_1 = require("../constants/client");
const isN_1 = require("./isN");
function isStatusClientError(val) {
    return (0, isN_1.isN)(client_1.CLIENT_ERROR_STATUS, val);
}
exports.isStatusClientError = isStatusClientError;
