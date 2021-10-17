"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStatusPermission = void 0;
const permission_1 = require("../constants/permission");
const isN_1 = require("./isN");
function isStatusPermission(val) {
    return (0, isN_1.isN)(permission_1.PERMISSION_DENIED_STATUS, val);
}
exports.isStatusPermission = isStatusPermission;
