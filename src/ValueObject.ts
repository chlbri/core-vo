import type { CaseOf } from './types';
import { Exception, IValidator } from './validators';

type RV<T> = readonly IValidator<T>[];

export class ValueObject<T = any, V extends RV<T> = any> {
  constructor(private value?: T, public validators?: V) {
    this.chain = this.chain.bind(this);
  }

  get unSafe() {
    return this.value;
  }

  get safe() {
    return this.validate(this.value);
  }

  validate(arg?: T) {
    if (!this.validators) return arg;
    for (const validator of this.validators) {
      if (!validator.validate(arg)) return validator.exception;
    }
    return arg;
  }

  recreate(value?: T) {
    return new ValueObject(value, this.validators);
  }

  validateBoolean(arg?: T) {
    const _arg = this.validate(arg);
    return !(_arg instanceof Exception);
  }

  get isValid() {
    return this.validateBoolean(this.value);
  }

  chain(next: ValueObject): ValueObject {
    return this.isValid ? next : this;
  }

  /**
   *
   * @param next
   * @returns next if this is invalid
   */
  unChain(next: ValueObject): ValueObject {
    return this.isValid ? this : next;
  }

  caseOf<R = any>({ then, error, notDefined }: CaseOf<T, R>) {
    const safe = this.safe;
    if (safe instanceof Exception) {
      return error(safe);
    }
    if (!safe) return notDefined();
    return then(safe);
  }
}

export type SimpleObject<T> = T extends ValueObject<infer R>
  ? R
  : T extends (...args: any[]) => any
  ? never
  : T;
