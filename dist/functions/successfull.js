"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStatusSuccessFull = void 0;
const successfull_1 = require("../constants/successfull");
const isN_1 = require("./isN");
function isStatusSuccessFull(val) {
    return (0, isN_1.isN)(successfull_1.SUCCESSFULL_STATUS, val);
}
exports.isStatusSuccessFull = isStatusSuccessFull;
