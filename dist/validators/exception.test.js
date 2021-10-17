"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("core");
const constants_1 = require("../constants");
const exception_1 = require("./exception");
(0, core_1.generateTests)((code) => exception_1.EXCEPTIONS[code], constants_1.EXCEPTION_CODES.map(val => [val]), constants_1.EXCEPTION_CODES.map(val => new exception_1.Exception(val)));
