"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStatusTests = void 0;
const core_1 = require("core");
function generateStatusTests(func, expecteds) {
    return (0, core_1.generateTests)(func, [
        [4],
        [100],
        [101],
        [104],
        [200],
        [202],
        [204],
        [300],
        [303],
        [304],
        [400],
        [404],
        [500],
        [504],
        [505],
        [1000],
        [700],
        [6000],
        [6041],
        [900],
        [941],
    ], expecteds);
}
exports.generateStatusTests = generateStatusTests;
