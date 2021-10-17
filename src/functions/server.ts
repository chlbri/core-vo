import { SERVER_ERROR_STATUS } from '../constants/server';
import { ServerErrorStatus } from '../types/server';
import { isN } from './isN';

export function isStatusServerError(
  val: number,
): val is ServerErrorStatus {
  return isN(SERVER_ERROR_STATUS, val);
}
