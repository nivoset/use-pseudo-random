import { useState, useMemo } from 'react';
import Prando from 'prando';
export var usePseudoRandom = function (_a) {
    var _b = _a === void 0 ? {} : _a, seed = _b.seed, _c = _b.wholeNumber, wholeNumber = _c === void 0 ? false : _c, range = _b.range;
    var _d = useState(0), value = _d[0], setValue = _d[1];
    var random = useMemo(function () { return new Prando(seed); }, [seed]);
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
