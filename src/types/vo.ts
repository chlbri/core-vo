import { ValueObject } from '../ValueObject';

export type TypeFromVO<T> = T extends ValueObject<infer U> ? U : never;
