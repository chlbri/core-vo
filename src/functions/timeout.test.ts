import { generateStatusTests } from './setup';
import { isTimeOutClientError } from './timeout';

generateStatusTests(isTimeOutClientError, [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  true,
  true,
]);
