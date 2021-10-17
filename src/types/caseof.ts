import { Exception } from '../validators/exception';

export type CaseOf<R = any> = {
  error: (exception: Exception) => R;
  then: (value: any) => R;
};