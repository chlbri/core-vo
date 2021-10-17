"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueEntity = void 0;
const ValueObject_1 = require("./ValueObject");
const validators_1 = require("./validators");
class ValueEntity {
    constructor(value, validators) {
        this.value = value;
        this.validators = validators;
        this.chain = this.chain.bind(this);
    }
    get unSafe() {
        return this.value;
    }
    get safe() {
        return this.validate(this.value);
    }
    validateInner(arg) {
        for (const key in arg) {
            if (Object.prototype.hasOwnProperty.call(arg, key)) {
                const el = arg[key];
                if (el instanceof ValueObject_1.ValueObject) {
                    const safe = el.safe;
                    if (safe instanceof validators_1.Exception)
                        return safe;
                }
            }
        }
        return arg;
    }
    validate(arg) {
        const out = this.validateInner(arg);
        if (out instanceof validators_1.Exception)
            return out;
        if (!this.validators)
            return out;
        for (const validator of this.validators) {
            if (!validator.validate(out))
                return validator.exception;
        }
        return out;
    }
    recreate(value) {
        return new ValueEntity(value, this.validators);
    }
    validateBoolean(arg) {
        const _arg = this.validate(arg);
        return !(_arg instanceof validators_1.Exception);
    }
    get isValid() {
        return this.validateBoolean(this.value);
    }
    chain(next) {
        return this.isValid ? next : this;
    }
    unChain(next) {
        return this.isValid ? this : next;
    }
    caseOf({ then, error }) {
        const safe = this.safe;
        if (safe instanceof validators_1.Exception) {
            return error(safe);
        }
        return then(safe);
    }
}
exports.ValueEntity = ValueEntity;
