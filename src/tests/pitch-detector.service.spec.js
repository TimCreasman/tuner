"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PitchDetectorServiceMock = void 0;
var PitchDetectorServiceMock = /** @class */ (function () {
    function PitchDetectorServiceMock() {
    }
    PitchDetectorServiceMock.prototype.getPitch = function () {
        return Math.random() * 20000;
    };
    return PitchDetectorServiceMock;
}());
exports.PitchDetectorServiceMock = PitchDetectorServiceMock;
