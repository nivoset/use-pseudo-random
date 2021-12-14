"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePseudoRandom = void 0;
var react_1 = require("react");
var prando_1 = __importDefault(require("prando"));
var usePseudoRandom = function (_a) {
    var _b = _a === void 0 ? {} : _a, seed = _b.seed, _c = _b.wholeNumber, wholeNumber = _c === void 0 ? false : _c, range = _b.range;
    var _d = (0, react_1.useState)(0), value = _d[0], setValue = _d[1];
    var random = (0, react_1.useMemo)(function () { return new prando_1.default(seed); }, [seed]);
    var next = function () {
        var result = wholeNumber ? random.nextInt(range === null || range === void 0 ? void 0 : range.min, range === null || range === void 0 ? void 0 : range.max) : random.next(range === null || range === void 0 ? void 0 : range.min, range === null || range === void 0 ? void 0 : range.max);
        setValue(result);
        return result;
    };
    return [
        value,
        next,
    ];
};
exports.usePseudoRandom = usePseudoRandom;
