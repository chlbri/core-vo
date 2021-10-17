import { PERMISSION_DENIED_STATUS } from '../constants/permission';
import { PermissionDeniedStatus } from '../types/permission';
import { isN } from './isN';

export function isStatusPermission(
  val: number,
): val is PermissionDeniedStatus {
  return isN(PERMISSION_DENIED_STATUS, val);
}
