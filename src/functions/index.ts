import { EXCEPTION_CODES, STATUS_CODES } from '../constants';
import { isN } from '../functions/isN';
import { ExceptionStatus, Status } from '../types';

export * from './client';
export * from './information';
export * from './isN';
export * from './permission';
export * from './redirect';
export * from './server';
export * from './successfull';
export * from './timeout';

export function isStatus(val: number): val is Status {
  return isN(STATUS_CODES, val);
}

export function isStatusException(val: number): val is ExceptionStatus {
  return isN(EXCEPTION_CODES, val);
}
