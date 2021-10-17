import { REDIRECT_STATUS } from '../constants/redirect';
import { isN } from './isN';
import { RedirectStatus } from '../types/redirect';

export function isStatusRedirect(val: number): val is RedirectStatus {
  return isN(REDIRECT_STATUS, val);
}
