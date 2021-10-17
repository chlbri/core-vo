import { generateTests, TupleOf } from 'core';
import { ExceptionStatus, EXCEPTION_CODES } from '../status';
import { Exception, EXCEPTIONS } from './exception';

generateTests(
  (code: ExceptionStatus) => EXCEPTIONS[code],
  EXCEPTION_CODES.map((val) => [val]) as TupleOf<
    [ExceptionStatus]
  >,
  EXCEPTION_CODES.map((val) => new Exception(val)),
);
