"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStatusException = exports.isStatus = void 0;
const constants_1 = require("../constants");
const isN_1 = require("../functions/isN");
__exportStar(require("./client"), exports);
__exportStar(require("./information"), exports);
__exportStar(require("./isN"), exports);
__exportStar(require("./permission"), exports);
__exportStar(require("./redirect"), exports);
__exportStar(require("./server"), exports);
__exportStar(require("./successfull"), exports);
__exportStar(require("./timeout"), exports);
function isStatus(val) {
    return (0, isN_1.isN)(constants_1.STATUS_CODES, val);
}
exports.isStatus = isStatus;
function isStatusException(val) {
    return (0, isN_1.isN)(constants_1.EXCEPTION_CODES, val);
}
exports.isStatusException = isStatusException;
