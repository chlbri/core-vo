"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("core");
const exception_1 = require("./exception");
const valuesTable = [
    [1],
    [2],
    [3],
    ['str'],
    [false],
    ['str_wrong'],
];
const functionsTable = [
    val => val === 3,
    val => val === 'str',
    val => typeof val === 'boolean',
];
const exceptionsTable = [
    exception_1.EXCEPTIONS[403],
    exception_1.EXCEPTIONS[503],
    exception_1.EXCEPTIONS[403],
];
const validatorsTable = functionsTable.map((validate, i) => {
    const exception = exceptionsTable[i];
    return [{ validate, exception }];
});
function testerFunction(validator) {
    return validator.validate;
}
function testerException(validator) {
    return validator.exception;
}
describe('Test Functions  =================================>', () => {
    (0, core_1.generate3Tests)(testerFunction, validatorsTable, functionsTable);
});
describe('Test Exceptions  =================================>', () => {
    (0, core_1.generate3Tests)(testerException, validatorsTable, exceptionsTable);
});
describe('Validation of values  =================================>', () => {
    function tester(validator, expecteds) {
        return describe(`${JSON.stringify(validator[0])}  ====>`, () => {
            (0, core_1.generate6Tests)(validator[0].validate, valuesTable, expecteds);
        });
    }
    tester(validatorsTable[0], [false, false, true, false, false, false]);
    tester(validatorsTable[1], [false, false, false, true, false, false]);
    tester(validatorsTable[2], [false, false, false, false, true, false]);
});
