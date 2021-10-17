"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redirect_1 = require("./redirect");
const setup_1 = require("./setup");
(0, setup_1.generateStatusTests)(redirect_1.isStatusRedirect, [
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
    false,
    false,
    false,
    false,
    false,
]);
