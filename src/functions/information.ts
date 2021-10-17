import { INFORMATION_STATUS } from '../constants/information';
import { isN } from './isN';
import { InformationStatus } from '../types/information';

export function isStatusInformation(
  val: number,
): val is InformationStatus {
  return isN(INFORMATION_STATUS, val);
}
