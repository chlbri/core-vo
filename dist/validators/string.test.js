"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("core");
const string_1 = require("./string");
const testTable = [
    ['4444'],
    ['cinq5'],
    ['six==6'],
    ['7777777'],
    ['huit==>8'],
    ['121212121212'],
    ['treize====>13'],
    ['12345678910114'],
];
describe('StringMinLengthValidator  =================================>', () => {
    function tester(val, expecteds) {
        return describe(`Minimum Validation : ${val}  ====>`, () => {
            const validator = new string_1.StringMinLengthValidator(val);
            (0, core_1.generate8Tests)(validator.validate, testTable, expecteds);
        });
    }
    tester(5, [false, true, true, true, true, true, true, true]);
    tester(13, [false, false, false, false, false, false, true, true]);
    tester(7, [false, false, false, true, true, true, true, true]);
});
describe('StringExactLengthValidator  =================================>', () => {
    function tester(val, expecteds) {
        return describe(`Minimum Validation : ${val}  ====>`, () => {
            const validator = new string_1.StringExactLengthValidator(val);
            (0, core_1.generate8Tests)(validator.validate, testTable, expecteds);
        });
    }
    tester(5, [false, true, false, false, false, false, false, false]);
    tester(13, [false, false, false, false, false, false, true, false]);
    tester(7, [false, false, false, true, false, false, false, false]);
});
describe('StringMaxLengthValidator  =================================>', () => {
    function tester(val, expecteds) {
        return describe(`Minimum Validation : ${val}  ====>`, () => {
            const validator = new string_1.StringMaxLengthValidator(val);
            (0, core_1.generate8Tests)(validator.validate, testTable, expecteds);
        });
    }
    tester(5, [true, true, false, false, false, false, false, false]);
    tester(13, [true, true, true, true, true, true, true, false]);
    tester(7, [true, true, true, true, false, false, false, false]);
});
describe('StringRequiredValidator  =================================>', () => {
    const validator = new string_1.StringRequiredValidator();
    (0, core_1.generate8Tests)(validator.validate, [[4], [5], ['str1'], ['str2'], [true], [undefined], [null], [54]], [false, false, true, true, false, false, false, false]);
});
describe('FormatedNumberValidator  =================================>', () => {
    function tester(expecteds, val) {
        describe(`Minimum Validation : ${val}  ====>`, () => {
            const validator = new string_1.FormatedNumberValidator(val);
            (0, core_1.generate8Tests)(validator.validate, testTable, expecteds);
        });
    }
    tester([true, false, false, true, false, true, false, true], undefined);
    tester([true, false, false, true, false, true, false, true], null);
    tester([true, false, false, false, false, false, false, false], 4);
    tester([false, false, false, true, false, false, false, false], 7);
    tester([false, false, false, false, false, true, false, false], 12);
    tester([false, false, false, false, false, false, false, false], 13);
    tester([false, false, false, false, false, false, false, true], 14);
});
