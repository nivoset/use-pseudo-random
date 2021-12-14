"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_hooks_1 = require("@testing-library/react-hooks");
var UsePseudoRandom_1 = require("./UsePseudoRandom");
test('should return the same random sequence of numbers with a seed', function () {
    var result = (0, react_hooks_1.renderHook)(function () { return (0, UsePseudoRandom_1.usePseudoRandom)({ seed: 1, wholeNumber: true }); }).result;
    var output = new Array(20).fill(0).map(function () {
        (0, react_hooks_1.act)(function () {
            result.current[1]();
        });
        return result.current[0];
    });
    expect(output).toMatchSnapshot();
});
test('should return within bounds', function () {
    var result = (0, react_hooks_1.renderHook)(function () { return (0, UsePseudoRandom_1.usePseudoRandom)({ wholeNumber: true, range: { min: 0, max: 10 } }); }).result;
    for (var i = 100; i > 0; i--) {
        (0, react_hooks_1.act)(function () {
            result.current[1]();
            expect(result.current[0]).toBeGreaterThanOrEqual(0);
            expect(result.current[0]).toBeLessThanOrEqual(10);
            expect(Math.floor(result.current[0])).toEqual(result.current[0]);
        });
    }
});
test('should work with no options passed in', function () {
    var result = (0, react_hooks_1.renderHook)(function () { return (0, UsePseudoRandom_1.usePseudoRandom)(); }).result;
    for (var i = 100; i > 0; i--) {
        (0, react_hooks_1.act)(function () {
            result.current[1]();
            expect(result.current[0]).toBeGreaterThanOrEqual(0);
            expect(result.current[0]).toBeLessThanOrEqual(1);
        });
    }
});
test('should return decimal number', function () {
    var result = (0, react_hooks_1.renderHook)(function () { return (0, UsePseudoRandom_1.usePseudoRandom)({ seed: 1337 }); }).result;
    (0, react_hooks_1.act)(function () {
        result.current[1]();
    });
    expect(result.current[0]).toEqual(0.5791554550126091);
});
test('should return decimal number', function () {
    var result = (0, react_hooks_1.renderHook)(function () { return (0, UsePseudoRandom_1.usePseudoRandom)({ seed: 'decimal number', range: { min: 0, max: 100 } }); }).result;
    expect(new Array(100).fill(0).map(function () {
        (0, react_hooks_1.act)(function () {
            result.current[1]();
        });
        return result.current[0];
    })).toMatchSnapshot();
});
