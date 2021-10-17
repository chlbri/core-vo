import { TIMEOUT_ERROR_STATUS } from '../constants/timeout';
import { TimeOutErrorStatus } from '../types/timeout';
import { isN } from './isN';

export function isTimeOutClientError(
  val: number,
): val is TimeOutErrorStatus {
  return isN(TIMEOUT_ERROR_STATUS, val);
}
