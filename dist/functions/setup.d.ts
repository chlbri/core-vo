/// <reference types="jest" />
export declare function generateStatusTests(func: (...val: [number]) => boolean, expecteds: boolean[]): {
    tests: readonly void[];
    spy: jest.Mock<any, any>;
};
