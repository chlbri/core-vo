import { Exception } from '../validators/exception';
export declare type CaseOf<T, R = any> = {
    error: (exception: Exception) => R;
    then: (value: T) => R;
    notDefined: () => R;
};
