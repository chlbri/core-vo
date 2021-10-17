"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("core");
const required_1 = require("./required");
const validator = new required_1.RequiredValidator();
(0, core_1.generate4Tests)(validator.validate, [[4], ['string'], [undefined], [null]], [true, true, false, false]);
