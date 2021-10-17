import { Exception } from '../validators/exception';
export declare type CaseOf<R = any> = {
    error: (exception: Exception) => R;
    then: (value: any) => R;
};
