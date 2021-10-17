"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStatusRedirect = void 0;
const redirect_1 = require("../constants/redirect");
const isN_1 = require("./isN");
function isStatusRedirect(val) {
    return (0, isN_1.isN)(redirect_1.REDIRECT_STATUS, val);
}
exports.isStatusRedirect = isStatusRedirect;
