import { ValueObject } from '../ValueObject';
export declare type TypeFromVO<T> = T extends ValueObject<infer U> ? U : never;
