"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
const core_1 = require("core");
const validators_1 = require("./validators");
const ValueObject_1 = require("./ValueObject");
// #region Functions to test
const safe = (vo) => vo.safe;
const unSafe = (vo) => vo.unSafe;
const isValid = (vo) => vo.isValid;
const chain = (vo1, vo2) => vo1.chain(vo2);
// #endregion
// #region Validators
const requiredV = new validators_1.RequiredValidator(validators_1.EXCEPTIONS[404]);
const numberMinV = new validators_1.NumberMinValidator(5, validators_1.EXCEPTIONS[502]);
const numberExactV = new validators_1.NumberExactValidator(7, validators_1.EXCEPTIONS[541]);
const numberMaxV = new validators_1.NumberMaxValidator(10, validators_1.EXCEPTIONS[551]);
const numberRequiredV = new validators_1.RequiredNumberValidator(validators_1.EXCEPTIONS[405]);
const stringMinV = new validators_1.StringMinLengthValidator(5, validators_1.EXCEPTIONS[507]);
const stringExactV = new validators_1.StringExactLengthValidator(7, validators_1.EXCEPTIONS[542]);
const stringMaxV = new validators_1.StringMaxLengthValidator(10, validators_1.EXCEPTIONS[552]);
const stringRequiredV = new validators_1.StringRequiredValidator(validators_1.EXCEPTIONS[406]);
const stringNumberFormatedV1 = new validators_1.FormatedNumberValidator(undefined, validators_1.EXCEPTIONS[580]);
const stringNumberFormatedV2 = new validators_1.FormatedNumberValidator(6, validators_1.EXCEPTIONS[590]);
// #endregion
// #region Datas to test
const valueActuals = [
    5,
    17,
    undefined,
    undefined,
    '125456751045',
    '4444',
    'cinq5',
    '55555',
    '55555',
    'six==6',
    '666666',
    'sept==7',
    'six==6',
    'onze======11',
    45,
    7,
    415,
    '45',
];
const validatorsActuals = [
    [requiredV, numberMinV],
    [requiredV, numberMaxV],
    [requiredV, numberMaxV],
    [numberMaxV],
    [stringMinV, stringNumberFormatedV1],
    [stringMinV, stringNumberFormatedV1],
    [stringMinV, stringNumberFormatedV1],
    [stringMinV, stringNumberFormatedV1],
    [stringMinV, stringNumberFormatedV2],
    [stringMinV, stringNumberFormatedV2],
    [stringMinV, stringNumberFormatedV2],
    [stringExactV],
    [stringRequiredV],
    [stringMaxV],
    [numberRequiredV],
    [numberExactV],
    [numberExactV],
    [numberRequiredV],
];
function getActuals() {
    return validatorsActuals.map((validatorsActual, i) => {
        const out = new ValueObject_1.ValueObject(valueActuals[i], validatorsActual);
        return [out];
    });
}
const chainActuals = (0, core_1.sliceArray)(validatorsActuals.map((validatorsActual, i) => {
    return new ValueObject_1.ValueObject(valueActuals[i], validatorsActual);
}), 2);
const chainsExpected = [
    getActuals()[1][0],
    getActuals()[2][0],
    getActuals()[5][0],
    getActuals()[6][0],
    getActuals()[8][0],
    getActuals()[11][0],
    getActuals()[13][0],
    getActuals()[15][0],
    getActuals()[16][0],
];
const chainsExpected2 = [
    getActuals()[1][0],
    getActuals()[2][0],
    getActuals()[5][0],
    getActuals()[6][0],
    getActuals()[8][0],
    getActuals()[11][0],
    getActuals()[13][0],
    getActuals()[16][0],
];
const safExpecteds = [
    valueActuals[0],
    numberMaxV.exception,
    requiredV.exception,
    numberMaxV.exception,
    valueActuals[4],
    stringMinV.exception,
    stringNumberFormatedV1.exception,
    valueActuals[7],
    stringNumberFormatedV2.exception,
    stringNumberFormatedV2.exception,
    valueActuals[10],
    valueActuals[11],
    valueActuals[12],
    stringMaxV.exception,
    valueActuals[14],
    valueActuals[15],
    numberExactV.exception,
    numberRequiredV.exception,
];
const unSafExpecteds = valueActuals;
const isValidExpecteds = [
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    false,
    true,
    true,
    false,
    false,
];
// #endregion
describe('VO.safe', () => {
    (0, core_1.generate18Tests)(safe, getActuals(), safExpecteds, true);
});
describe('VO.unSafe', () => {
    (0, core_1.generate18Tests)(unSafe, getActuals(), unSafExpecteds, true);
});
describe('VO.isValid', () => {
    (0, core_1.generate18Tests)(isValid, getActuals(), isValidExpecteds, true);
});
describe('VO.chain', () => {
    (0, core_1.generateTests)(chain, chainActuals, [
        getActuals()[1][0],
        getActuals()[2][0],
        getActuals()[5][0],
        getActuals()[6][0],
        getActuals()[8][0],
        getActuals()[11][0],
        getActuals()[13][0],
        getActuals()[15][0],
        getActuals()[16][0],
    ], true);
});
