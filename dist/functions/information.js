"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStatusInformation = void 0;
const information_1 = require("../constants/information");
const isN_1 = require("./isN");
function isStatusInformation(val) {
    return (0, isN_1.isN)(information_1.INFORMATION_STATUS, val);
}
exports.isStatusInformation = isStatusInformation;
