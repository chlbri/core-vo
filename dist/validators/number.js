"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredNumberValidator = exports.NumberMaxValidator = exports.NumberExactValidator = exports.NumberMinValidator = exports.NumberValidator = void 0;
const core_1 = require("core");
const validator_1 = require("./validator");
class NumberValidator extends validator_1.Validator {
    constructor(validate, exception) {
        super(value => !(0, core_1.isNullish)(value) && validate(value), exception);
    }
}
exports.NumberValidator = NumberValidator;
class NumberMinValidator extends NumberValidator {
    constructor(min, exception) {
        super(value => !!value && value >= min, exception);
    }
}
exports.NumberMinValidator = NumberMinValidator;
class NumberExactValidator extends NumberValidator {
    constructor(exact, exception) {
        super(value => value === exact, exception);
    }
}
exports.NumberExactValidator = NumberExactValidator;
class NumberMaxValidator extends NumberValidator {
    constructor(max, exception) {
        super(value => !!value && value <= max, exception);
    }
}
exports.NumberMaxValidator = NumberMaxValidator;
class RequiredNumberValidator extends validator_1.Validator {
    constructor(exception) {
        super(value => {
            return typeof value === 'number';
        }, exception);
    }
}
exports.RequiredNumberValidator = RequiredNumberValidator;
