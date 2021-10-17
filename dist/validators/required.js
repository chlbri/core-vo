"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredValidator = void 0;
const core_1 = require("core");
const validator_1 = require("./validator");
class RequiredValidator extends validator_1.Validator {
    constructor(exception) {
        super(value => !(0, core_1.isNullish)(value), exception);
    }
}
exports.RequiredValidator = RequiredValidator;
