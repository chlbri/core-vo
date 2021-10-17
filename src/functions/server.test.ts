import { isStatusServerError } from './server';
import { generateStatusTests } from './setup';

generateStatusTests(isStatusServerError, [
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
  true,
  false,
  false,
  false,
  false,
  false,
  false,
]);
