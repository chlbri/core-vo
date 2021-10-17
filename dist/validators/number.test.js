"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("core");
const number_1 = require("./number");
const testTable = [
    [4],
    [5],
    [6],
    [7],
    [8],
    [12],
    [13],
    [14],
];
describe('NumberMinValidator  =================================>', () => {
    function tester(val, expecteds) {
        return describe(`Minimum Validation : ${val}  ====>`, () => {
            const validator = new number_1.NumberMinValidator(val);
            (0, core_1.generate8Tests)(validator.validate, testTable, expecteds);
        });
    }
    tester(5, [false, true, true, true, true, true, true, true]);
    tester(13, [false, false, false, false, false, false, true, true]);
    tester(7, [false, false, false, true, true, true, true, true]);
});
describe('NumberExactValidator  =================================>', () => {
    function tester(val, expecteds) {
        return describe(`Exact Validation : ${val}  ====>`, () => {
            const validator = new number_1.NumberExactValidator(val);
            (0, core_1.generate8Tests)(validator.validate, testTable, expecteds);
        });
    }
    tester(5, [false, true, false, false, false, false, false, false]);
    tester(13, [false, false, false, false, false, false, true, false]);
    tester(7, [false, false, false, true, false, false, false, false]);
});
describe('NumberMaxValidator  =================================>', () => {
    function tester(val, expecteds) {
        return describe(`Maximum Validation : ${val}  ====>`, () => {
            const validator = new number_1.NumberMaxValidator(val);
            (0, core_1.generate8Tests)(validator.validate, testTable, expecteds);
        });
    }
    tester(5, [true, true, false, false, false, false, false, false]);
    tester(13, [true, true, true, true, true, true, true, false]);
    tester(7, [true, true, true, true, false, false, false, false]);
});
describe('RequiredNumberValidator  =================================>', () => {
    const validator = new number_1.RequiredNumberValidator();
    (0, core_1.generate8Tests)(validator.validate, [[4], [5], ['str1'], ['str2'], [true], [undefined], [null], [54]], [true, true, false, false, false, false, false, true]);
});
