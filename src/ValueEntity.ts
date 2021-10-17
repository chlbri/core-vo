import { ValueObject } from './ValueObject';
import { Exception, IValidator } from './validators';

type RV<T> = readonly IValidator<T>[];

type TT = Record<string, any>;

type CaseOf<R = any> = {
  error: (exception: Exception) => R;
  then: (value: any) => R;
};

export class ValueEntity<T extends TT = any, V extends RV<T> = any> {
  constructor(private value?: T, public validators?: V) {
    this.chain = this.chain.bind(this);
  }

  get unSafe() {
    return this.value;
  }

  get safe() {
    return this.validate(this.value);
  }

  validateInner(arg?: T) {
    for (const key in arg) {
      if (Object.prototype.hasOwnProperty.call(arg, key)) {
        const el = arg[key] as any;
        if (el instanceof ValueObject) {
          const safe = el.safe;
          if (safe instanceof Exception) return safe;
        }
      }
    }
    return arg;
  }

  validate(arg?: T) {
    const out = this.validateInner(arg);
    if (out instanceof Exception) return out;

    if (!this.validators) return out;
    for (const validator of this.validators) {
      if (!validator.validate(out)) return validator.exception;
    }
    return out;
  }

  recreate(value?: T) {
    return new ValueEntity(value, this.validators);
  }

  validateBoolean(arg?: T) {
    const _arg = this.validate(arg);
    return !(_arg instanceof Exception);
  }

  get isValid() {
    return this.validateBoolean(this.value);
  }

  chain(next: ValueEntity): ValueEntity {
    return this.isValid ? next : this;
  }

  unChain(next: ValueEntity): ValueEntity {
    return this.isValid ? this : next;
  }

  caseOf<R = any>({ then, error }: CaseOf<R>) {
    const safe = this.safe;
    if (safe instanceof Exception) {
      return error(safe);
    }
    return then(safe);
  }
}

export type SimpleEntity<T> = T extends ValueEntity<infer R>
  ? R
  : T extends (...args: any[]) => any
  ? never
  : T;
