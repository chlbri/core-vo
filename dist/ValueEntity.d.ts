import { Exception, IValidator } from './validators';
declare type RV<T> = readonly IValidator<T>[];
declare type TT = Record<string, any>;
declare type CaseOf<R = any> = {
    error: (exception: Exception) => R;
    then: (value: any) => R;
};
export declare class ValueEntity<T extends TT = any, V extends RV<T> = any> {
    private value?;
    validators?: V | undefined;
    constructor(value?: T | undefined, validators?: V | undefined);
    get unSafe(): T | undefined;
    get safe(): Exception<any> | T | undefined;
    validateInner(arg?: T): Exception<any> | T | undefined;
    validate(arg?: T): Exception<any> | T | undefined;
    recreate(value?: T): ValueEntity<T, V>;
    validateBoolean(arg?: T): boolean;
    get isValid(): boolean;
    chain(next: ValueEntity): ValueEntity;
    unChain(next: ValueEntity): ValueEntity;
    caseOf<R = any>({ then, error }: CaseOf<R>): R;
}
export declare type SimpleEntity<T> = T extends ValueEntity<infer R> ? R : T extends (...args: any[]) => any ? never : T;
export {};
