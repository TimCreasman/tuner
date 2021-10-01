"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PitchDetectorService = void 0;
var pitchy_1 = require("pitchy");
var PitchDetectorService = /** @class */ (function () {
    function PitchDetectorService(updateRate) {
        if (updateRate === void 0) { updateRate = 100; }
        this.updateRate = updateRate;
        this.audioContext = new window.AudioContext();
        this.analyserNode = this.audioContext.createAnalyser();
        this.pitchDetector = pitchy_1.PitchDetector.forFloat32Array(this.analyserNode.fftSize);
    }
    // TODO move this to an audio manager class?
    PitchDetectorService.prototype.connectToStream = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stream, err_1, sourceNode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia({ audio: true })];
                    case 1:
                        stream = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3:
                        sourceNode = this.audioContext.createMediaStreamSource(stream);
                        // pipe the microphone source to the pitch detector's analyser node
                        sourceNode.connect(this.analyserNode);
                        // in most browsers the audio context gets automatically suspended so it needs to be resumed here
                        return [4 /*yield*/, this.audioContext.resume()];
                    case 4:
                        // in most browsers the audio context gets automatically suspended so it needs to be resumed here
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PitchDetectorService.prototype.start = function () {
        this.intervalReference = window.setInterval(this.pollValues.bind(this), this.updateRate);
    };
    PitchDetectorService.prototype.stop = function () {
        window.clearInterval(this.intervalReference);
    };
    PitchDetectorService.prototype.getPitch = function () {
        return this.pitch;
    };
    PitchDetectorService.prototype.getClarity = function () {
        return this.clarity;
    };
    PitchDetectorService.prototype.pollValues = function () {
        var _a;
        console.log(this.pitch, this.clarity);
        var inputArray = new Float32Array(this.pitchDetector.inputLength);
        this.analyserNode.getFloatTimeDomainData(inputArray);
        _a = this.pitchDetector.findPitch(inputArray, this.audioContext.sampleRate), this.pitch = _a[0], this.clarity = _a[1];
    };
    return PitchDetectorService;
}());
exports.PitchDetectorService = PitchDetectorService;
