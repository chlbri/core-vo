import { CLIENT_ERROR_STATUS } from './client';
import { INFORMATION_STATUS } from './information';
import { PERMISSION_DENIED_STATUS } from './permission';
import { REDIRECT_STATUS } from './redirect';
import { SERVER_ERROR_STATUS } from './server';
import { SUCCESSFULL_STATUS } from './successfull';
import { TIMEOUT_ERROR_STATUS } from './timeout';

export {
  CLIENT_ERROR_STATUS,
  INFORMATION_STATUS,
  PERMISSION_DENIED_STATUS,
  REDIRECT_STATUS,
  SERVER_ERROR_STATUS,
  SUCCESSFULL_STATUS,
  TIMEOUT_ERROR_STATUS,
};

export const EXCEPTION_CODES = [
  ...CLIENT_ERROR_STATUS,
  ...SERVER_ERROR_STATUS,
  ...PERMISSION_DENIED_STATUS,
  ...TIMEOUT_ERROR_STATUS,
] as const;

export const STATUS_CODES = [
  ...INFORMATION_STATUS,
  ...SUCCESSFULL_STATUS,
  ...REDIRECT_STATUS,
  ...EXCEPTION_CODES,
] as const;
