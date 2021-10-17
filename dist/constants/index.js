"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS_CODES = exports.EXCEPTION_CODES = exports.TIMEOUT_ERROR_STATUS = exports.SUCCESSFULL_STATUS = exports.SERVER_ERROR_STATUS = exports.REDIRECT_STATUS = exports.PERMISSION_DENIED_STATUS = exports.INFORMATION_STATUS = exports.CLIENT_ERROR_STATUS = void 0;
const client_1 = require("./client");
Object.defineProperty(exports, "CLIENT_ERROR_STATUS", { enumerable: true, get: function () { return client_1.CLIENT_ERROR_STATUS; } });
const information_1 = require("./information");
Object.defineProperty(exports, "INFORMATION_STATUS", { enumerable: true, get: function () { return information_1.INFORMATION_STATUS; } });
const permission_1 = require("./permission");
Object.defineProperty(exports, "PERMISSION_DENIED_STATUS", { enumerable: true, get: function () { return permission_1.PERMISSION_DENIED_STATUS; } });
const redirect_1 = require("./redirect");
Object.defineProperty(exports, "REDIRECT_STATUS", { enumerable: true, get: function () { return redirect_1.REDIRECT_STATUS; } });
const server_1 = require("./server");
Object.defineProperty(exports, "SERVER_ERROR_STATUS", { enumerable: true, get: function () { return server_1.SERVER_ERROR_STATUS; } });
const successfull_1 = require("./successfull");
Object.defineProperty(exports, "SUCCESSFULL_STATUS", { enumerable: true, get: function () { return successfull_1.SUCCESSFULL_STATUS; } });
const timeout_1 = require("./timeout");
Object.defineProperty(exports, "TIMEOUT_ERROR_STATUS", { enumerable: true, get: function () { return timeout_1.TIMEOUT_ERROR_STATUS; } });
exports.EXCEPTION_CODES = [
    ...client_1.CLIENT_ERROR_STATUS,
    ...server_1.SERVER_ERROR_STATUS,
    ...permission_1.PERMISSION_DENIED_STATUS,
    ...timeout_1.TIMEOUT_ERROR_STATUS,
];
exports.STATUS_CODES = [
    ...information_1.INFORMATION_STATUS,
    ...successfull_1.SUCCESSFULL_STATUS,
    ...redirect_1.REDIRECT_STATUS,
    ...exports.EXCEPTION_CODES,
];
