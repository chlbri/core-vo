import { CLIENT_ERROR_STATUS } from '../constants/client';
import { ClientErrorStatus } from '../types/client';
import { isN } from './isN';

export function isStatusClientError(
  val: number,
): val is ClientErrorStatus {
  return isN(CLIENT_ERROR_STATUS, val);
}
