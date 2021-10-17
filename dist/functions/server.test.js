"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const setup_1 = require("./setup");
(0, setup_1.generateStatusTests)(server_1.isStatusServerError, [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
]);
