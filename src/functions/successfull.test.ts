import { generateStatusTests } from './setup';
import { isStatusSuccessFull } from './successfull';

generateStatusTests(isStatusSuccessFull, [
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
  false,
  false,
  false,
]);
