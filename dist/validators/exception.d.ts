import { ExceptionStatus } from '../types';
export interface IException<T extends ExceptionStatus = ExceptionStatus> {
    readonly status: T;
}
export declare class Exception<T extends ExceptionStatus = ExceptionStatus> implements IException<T> {
    readonly status: T;
    constructor(status: T);
    toString(): string;
}
export declare const EXCEPTIONS: {
    [key in ExceptionStatus]: Exception;
};
