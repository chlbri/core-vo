import { SUCCESSFULL_STATUS } from '../constants/successfull';
import { SuccesfullStatus } from '../types/successfull';
import { isN } from './isN';

export function isStatusSuccessFull(val: number): val is SuccesfullStatus {
  return isN(SUCCESSFULL_STATUS, val);
}
