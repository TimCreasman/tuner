"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotationUtility = exports.NOTES_IN_OCTAVE = exports.NAMES_WITH_FLATS = exports.NAMES_WITH_SHARPS = exports.B9 = exports.C0 = exports.A4 = void 0;
// one note must be defined
exports.A4 = 440;
// calculate the lowest notated pitch (C0) based on A4
// With A4 = 440 C0 is around 16.35Hz
exports.C0 = exports.A4 * (Math.pow(2, -4.75));
// upperbound pitch frequency
//TODO make this based on A4
exports.B9 = 14080;
// naming conventions
exports.NAMES_WITH_SHARPS = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
exports.NAMES_WITH_FLATS = ['C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭', 'A', 'B♭', 'B'];
// the number of divisions between notes
exports.NOTES_IN_OCTAVE = 12;
var NotationUtility = /** @class */ (function () {
    function NotationUtility() {
    }
    // returns the note notation representation of a frequency
    NotationUtility.hzToNoteName = function (frequency) {
        if (frequency < exports.C0) {
            return exports.NAMES_WITH_SHARPS[0] + '0';
        }
        if (frequency > exports.B9) {
            return exports.NAMES_WITH_SHARPS[11] + '9';
        }
        // half steps from the lowest defined note (C0)
        var halfSteps = Math.round(exports.NOTES_IN_OCTAVE * Math.log2(frequency / exports.C0));
        var octave = Math.floor(halfSteps / exports.NOTES_IN_OCTAVE);
        var letterIndex = halfSteps % exports.NOTES_IN_OCTAVE;
        if (isNaN(halfSteps) || isNaN(octave) || isNaN(letterIndex)) {
            throw new Error('calculated frequency produced NaN');
        }
        //TODO make this dynamic so you can choose to display as sharps or flats
        return exports.NAMES_WITH_SHARPS[letterIndex] + octave;
    };
    return NotationUtility;
}());
exports.NotationUtility = NotationUtility;
