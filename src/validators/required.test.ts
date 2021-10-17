import { generate4Tests } from 'core';
import { RequiredValidator } from './required';

const validator = new RequiredValidator();
generate4Tests(
  validator.validate,
  [[4], ['string'], [undefined], [null]],
  [true, true, false, false],
);
