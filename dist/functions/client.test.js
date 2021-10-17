"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const setup_1 = require("./setup");
(0, setup_1.generateStatusTests)(client_1.isStatusClientError, [
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
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
]);
