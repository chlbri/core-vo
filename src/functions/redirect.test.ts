import { isStatusRedirect } from './redirect';
import { generateStatusTests } from './setup';

generateStatusTests(isStatusRedirect, [
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
  false,
  false,
  false,
  false,
  false,
]);
