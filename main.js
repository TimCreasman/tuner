(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __pow = Math.pow;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i5 = decorators.length - 1, decorator; i5 >= 0; i5--)
      if (decorator = decorators[i5])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e5) {
          reject(e5);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e5) {
          reject(e5);
        }
      };
      var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/bezier-easing/src/index.js
  var require_src = __commonJS({
    "node_modules/bezier-easing/src/index.js"(exports, module) {
      var NEWTON_ITERATIONS = 4;
      var NEWTON_MIN_SLOPE = 1e-3;
      var SUBDIVISION_PRECISION = 1e-7;
      var SUBDIVISION_MAX_ITERATIONS = 10;
      var kSplineTableSize = 11;
      var kSampleStepSize = 1 / (kSplineTableSize - 1);
      var float32ArraySupported = typeof Float32Array === "function";
      function A2(aA1, aA2) {
        return 1 - 3 * aA2 + 3 * aA1;
      }
      function B(aA1, aA2) {
        return 3 * aA2 - 6 * aA1;
      }
      function C2(aA1) {
        return 3 * aA1;
      }
      function calcBezier(aT, aA1, aA2) {
        return ((A2(aA1, aA2) * aT + B(aA1, aA2)) * aT + C2(aA1)) * aT;
      }
      function getSlope(aT, aA1, aA2) {
        return 3 * A2(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C2(aA1);
      }
      function binarySubdivide(aX, aA, aB, mX1, mX2) {
        var currentX, currentT, i5 = 0;
        do {
          currentT = aA + (aB - aA) / 2;
          currentX = calcBezier(currentT, mX1, mX2) - aX;
          if (currentX > 0) {
            aB = currentT;
          } else {
            aA = currentT;
          }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i5 < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
      }
      function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
        for (var i5 = 0; i5 < NEWTON_ITERATIONS; ++i5) {
          var currentSlope = getSlope(aGuessT, mX1, mX2);
          if (currentSlope === 0) {
            return aGuessT;
          }
          var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
          aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
      }
      function LinearEasing(x2) {
        return x2;
      }
      module.exports = function bezier2(mX1, mY1, mX2, mY2) {
        if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
          throw new Error("bezier x values must be in [0, 1] range");
        }
        if (mX1 === mY1 && mX2 === mY2) {
          return LinearEasing;
        }
        var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
        for (var i5 = 0; i5 < kSplineTableSize; ++i5) {
          sampleValues[i5] = calcBezier(i5 * kSampleStepSize, mX1, mX2);
        }
        function getTForX(aX) {
          var intervalStart = 0;
          var currentSample = 1;
          var lastSample = kSplineTableSize - 1;
          for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
          }
          --currentSample;
          var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
          var guessForT = intervalStart + dist * kSampleStepSize;
          var initialSlope = getSlope(guessForT, mX1, mX2);
          if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
          } else if (initialSlope === 0) {
            return guessForT;
          } else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
          }
        }
        return function BezierEasing(x2) {
          if (x2 === 0) {
            return 0;
          }
          if (x2 === 1) {
            return 1;
          }
          return calcBezier(getTForX(x2), mY1, mY2);
        };
      };
    }
  });

  // node_modules/fft.js/lib/fft.js
  var require_fft = __commonJS({
    "node_modules/fft.js/lib/fft.js"(exports, module) {
      "use strict";
      function FFT2(size) {
        this.size = size | 0;
        if (this.size <= 1 || (this.size & this.size - 1) !== 0)
          throw new Error("FFT size must be a power of two and bigger than 1");
        this._csize = size << 1;
        var table = new Array(this.size * 2);
        for (var i5 = 0; i5 < table.length; i5 += 2) {
          const angle = Math.PI * i5 / this.size;
          table[i5] = Math.cos(angle);
          table[i5 + 1] = -Math.sin(angle);
        }
        this.table = table;
        var power = 0;
        for (var t3 = 1; this.size > t3; t3 <<= 1)
          power++;
        this._width = power % 2 === 0 ? power - 1 : power;
        this._bitrev = new Array(1 << this._width);
        for (var j = 0; j < this._bitrev.length; j++) {
          this._bitrev[j] = 0;
          for (var shift = 0; shift < this._width; shift += 2) {
            var revShift = this._width - shift - 2;
            this._bitrev[j] |= (j >>> shift & 3) << revShift;
          }
        }
        this._out = null;
        this._data = null;
        this._inv = 0;
      }
      module.exports = FFT2;
      FFT2.prototype.fromComplexArray = function fromComplexArray(complex, storage) {
        var res = storage || new Array(complex.length >>> 1);
        for (var i5 = 0; i5 < complex.length; i5 += 2)
          res[i5 >>> 1] = complex[i5];
        return res;
      };
      FFT2.prototype.createComplexArray = function createComplexArray() {
        const res = new Array(this._csize);
        for (var i5 = 0; i5 < res.length; i5++)
          res[i5] = 0;
        return res;
      };
      FFT2.prototype.toComplexArray = function toComplexArray(input, storage) {
        var res = storage || this.createComplexArray();
        for (var i5 = 0; i5 < res.length; i5 += 2) {
          res[i5] = input[i5 >>> 1];
          res[i5 + 1] = 0;
        }
        return res;
      };
      FFT2.prototype.completeSpectrum = function completeSpectrum(spectrum) {
        var size = this._csize;
        var half = size >>> 1;
        for (var i5 = 2; i5 < half; i5 += 2) {
          spectrum[size - i5] = spectrum[i5];
          spectrum[size - i5 + 1] = -spectrum[i5 + 1];
        }
      };
      FFT2.prototype.transform = function transform(out, data) {
        if (out === data)
          throw new Error("Input and output buffers must be different");
        this._out = out;
        this._data = data;
        this._inv = 0;
        this._transform4();
        this._out = null;
        this._data = null;
      };
      FFT2.prototype.realTransform = function realTransform(out, data) {
        if (out === data)
          throw new Error("Input and output buffers must be different");
        this._out = out;
        this._data = data;
        this._inv = 0;
        this._realTransform4();
        this._out = null;
        this._data = null;
      };
      FFT2.prototype.inverseTransform = function inverseTransform(out, data) {
        if (out === data)
          throw new Error("Input and output buffers must be different");
        this._out = out;
        this._data = data;
        this._inv = 1;
        this._transform4();
        for (var i5 = 0; i5 < out.length; i5++)
          out[i5] /= this.size;
        this._out = null;
        this._data = null;
      };
      FFT2.prototype._transform4 = function _transform4() {
        var out = this._out;
        var size = this._csize;
        var width = this._width;
        var step = 1 << width;
        var len = size / step << 1;
        var outOff;
        var t3;
        var bitrev = this._bitrev;
        if (len === 4) {
          for (outOff = 0, t3 = 0; outOff < size; outOff += len, t3++) {
            const off = bitrev[t3];
            this._singleTransform2(outOff, off, step);
          }
        } else {
          for (outOff = 0, t3 = 0; outOff < size; outOff += len, t3++) {
            const off = bitrev[t3];
            this._singleTransform4(outOff, off, step);
          }
        }
        var inv = this._inv ? -1 : 1;
        var table = this.table;
        for (step >>= 2; step >= 2; step >>= 2) {
          len = size / step << 1;
          var quarterLen = len >>> 2;
          for (outOff = 0; outOff < size; outOff += len) {
            var limit = outOff + quarterLen;
            for (var i5 = outOff, k2 = 0; i5 < limit; i5 += 2, k2 += step) {
              const A2 = i5;
              const B = A2 + quarterLen;
              const C2 = B + quarterLen;
              const D = C2 + quarterLen;
              const Ar = out[A2];
              const Ai = out[A2 + 1];
              const Br = out[B];
              const Bi = out[B + 1];
              const Cr = out[C2];
              const Ci = out[C2 + 1];
              const Dr = out[D];
              const Di = out[D + 1];
              const MAr = Ar;
              const MAi = Ai;
              const tableBr = table[k2];
              const tableBi = inv * table[k2 + 1];
              const MBr = Br * tableBr - Bi * tableBi;
              const MBi = Br * tableBi + Bi * tableBr;
              const tableCr = table[2 * k2];
              const tableCi = inv * table[2 * k2 + 1];
              const MCr = Cr * tableCr - Ci * tableCi;
              const MCi = Cr * tableCi + Ci * tableCr;
              const tableDr = table[3 * k2];
              const tableDi = inv * table[3 * k2 + 1];
              const MDr = Dr * tableDr - Di * tableDi;
              const MDi = Dr * tableDi + Di * tableDr;
              const T0r = MAr + MCr;
              const T0i = MAi + MCi;
              const T1r = MAr - MCr;
              const T1i = MAi - MCi;
              const T2r = MBr + MDr;
              const T2i = MBi + MDi;
              const T3r = inv * (MBr - MDr);
              const T3i = inv * (MBi - MDi);
              const FAr = T0r + T2r;
              const FAi = T0i + T2i;
              const FCr = T0r - T2r;
              const FCi = T0i - T2i;
              const FBr = T1r + T3i;
              const FBi = T1i - T3r;
              const FDr = T1r - T3i;
              const FDi = T1i + T3r;
              out[A2] = FAr;
              out[A2 + 1] = FAi;
              out[B] = FBr;
              out[B + 1] = FBi;
              out[C2] = FCr;
              out[C2 + 1] = FCi;
              out[D] = FDr;
              out[D + 1] = FDi;
            }
          }
        }
      };
      FFT2.prototype._singleTransform2 = function _singleTransform2(outOff, off, step) {
        const out = this._out;
        const data = this._data;
        const evenR = data[off];
        const evenI = data[off + 1];
        const oddR = data[off + step];
        const oddI = data[off + step + 1];
        const leftR = evenR + oddR;
        const leftI = evenI + oddI;
        const rightR = evenR - oddR;
        const rightI = evenI - oddI;
        out[outOff] = leftR;
        out[outOff + 1] = leftI;
        out[outOff + 2] = rightR;
        out[outOff + 3] = rightI;
      };
      FFT2.prototype._singleTransform4 = function _singleTransform4(outOff, off, step) {
        const out = this._out;
        const data = this._data;
        const inv = this._inv ? -1 : 1;
        const step2 = step * 2;
        const step3 = step * 3;
        const Ar = data[off];
        const Ai = data[off + 1];
        const Br = data[off + step];
        const Bi = data[off + step + 1];
        const Cr = data[off + step2];
        const Ci = data[off + step2 + 1];
        const Dr = data[off + step3];
        const Di = data[off + step3 + 1];
        const T0r = Ar + Cr;
        const T0i = Ai + Ci;
        const T1r = Ar - Cr;
        const T1i = Ai - Ci;
        const T2r = Br + Dr;
        const T2i = Bi + Di;
        const T3r = inv * (Br - Dr);
        const T3i = inv * (Bi - Di);
        const FAr = T0r + T2r;
        const FAi = T0i + T2i;
        const FBr = T1r + T3i;
        const FBi = T1i - T3r;
        const FCr = T0r - T2r;
        const FCi = T0i - T2i;
        const FDr = T1r - T3i;
        const FDi = T1i + T3r;
        out[outOff] = FAr;
        out[outOff + 1] = FAi;
        out[outOff + 2] = FBr;
        out[outOff + 3] = FBi;
        out[outOff + 4] = FCr;
        out[outOff + 5] = FCi;
        out[outOff + 6] = FDr;
        out[outOff + 7] = FDi;
      };
      FFT2.prototype._realTransform4 = function _realTransform4() {
        var out = this._out;
        var size = this._csize;
        var width = this._width;
        var step = 1 << width;
        var len = size / step << 1;
        var outOff;
        var t3;
        var bitrev = this._bitrev;
        if (len === 4) {
          for (outOff = 0, t3 = 0; outOff < size; outOff += len, t3++) {
            const off = bitrev[t3];
            this._singleRealTransform2(outOff, off >>> 1, step >>> 1);
          }
        } else {
          for (outOff = 0, t3 = 0; outOff < size; outOff += len, t3++) {
            const off = bitrev[t3];
            this._singleRealTransform4(outOff, off >>> 1, step >>> 1);
          }
        }
        var inv = this._inv ? -1 : 1;
        var table = this.table;
        for (step >>= 2; step >= 2; step >>= 2) {
          len = size / step << 1;
          var halfLen = len >>> 1;
          var quarterLen = halfLen >>> 1;
          var hquarterLen = quarterLen >>> 1;
          for (outOff = 0; outOff < size; outOff += len) {
            for (var i5 = 0, k2 = 0; i5 <= hquarterLen; i5 += 2, k2 += step) {
              var A2 = outOff + i5;
              var B = A2 + quarterLen;
              var C2 = B + quarterLen;
              var D = C2 + quarterLen;
              var Ar = out[A2];
              var Ai = out[A2 + 1];
              var Br = out[B];
              var Bi = out[B + 1];
              var Cr = out[C2];
              var Ci = out[C2 + 1];
              var Dr = out[D];
              var Di = out[D + 1];
              var MAr = Ar;
              var MAi = Ai;
              var tableBr = table[k2];
              var tableBi = inv * table[k2 + 1];
              var MBr = Br * tableBr - Bi * tableBi;
              var MBi = Br * tableBi + Bi * tableBr;
              var tableCr = table[2 * k2];
              var tableCi = inv * table[2 * k2 + 1];
              var MCr = Cr * tableCr - Ci * tableCi;
              var MCi = Cr * tableCi + Ci * tableCr;
              var tableDr = table[3 * k2];
              var tableDi = inv * table[3 * k2 + 1];
              var MDr = Dr * tableDr - Di * tableDi;
              var MDi = Dr * tableDi + Di * tableDr;
              var T0r = MAr + MCr;
              var T0i = MAi + MCi;
              var T1r = MAr - MCr;
              var T1i = MAi - MCi;
              var T2r = MBr + MDr;
              var T2i = MBi + MDi;
              var T3r = inv * (MBr - MDr);
              var T3i = inv * (MBi - MDi);
              var FAr = T0r + T2r;
              var FAi = T0i + T2i;
              var FBr = T1r + T3i;
              var FBi = T1i - T3r;
              out[A2] = FAr;
              out[A2 + 1] = FAi;
              out[B] = FBr;
              out[B + 1] = FBi;
              if (i5 === 0) {
                var FCr = T0r - T2r;
                var FCi = T0i - T2i;
                out[C2] = FCr;
                out[C2 + 1] = FCi;
                continue;
              }
              if (i5 === hquarterLen)
                continue;
              var ST0r = T1r;
              var ST0i = -T1i;
              var ST1r = T0r;
              var ST1i = -T0i;
              var ST2r = -inv * T3i;
              var ST2i = -inv * T3r;
              var ST3r = -inv * T2i;
              var ST3i = -inv * T2r;
              var SFAr = ST0r + ST2r;
              var SFAi = ST0i + ST2i;
              var SFBr = ST1r + ST3i;
              var SFBi = ST1i - ST3r;
              var SA = outOff + quarterLen - i5;
              var SB = outOff + halfLen - i5;
              out[SA] = SFAr;
              out[SA + 1] = SFAi;
              out[SB] = SFBr;
              out[SB + 1] = SFBi;
            }
          }
        }
      };
      FFT2.prototype._singleRealTransform2 = function _singleRealTransform2(outOff, off, step) {
        const out = this._out;
        const data = this._data;
        const evenR = data[off];
        const oddR = data[off + step];
        const leftR = evenR + oddR;
        const rightR = evenR - oddR;
        out[outOff] = leftR;
        out[outOff + 1] = 0;
        out[outOff + 2] = rightR;
        out[outOff + 3] = 0;
      };
      FFT2.prototype._singleRealTransform4 = function _singleRealTransform4(outOff, off, step) {
        const out = this._out;
        const data = this._data;
        const inv = this._inv ? -1 : 1;
        const step2 = step * 2;
        const step3 = step * 3;
        const Ar = data[off];
        const Br = data[off + step];
        const Cr = data[off + step2];
        const Dr = data[off + step3];
        const T0r = Ar + Cr;
        const T1r = Ar - Cr;
        const T2r = Br + Dr;
        const T3r = inv * (Br - Dr);
        const FAr = T0r + T2r;
        const FBr = T1r;
        const FBi = -T3r;
        const FCr = T0r - T2r;
        const FDr = T1r;
        const FDi = T3r;
        out[outOff] = FAr;
        out[outOff + 1] = 0;
        out[outOff + 2] = FBr;
        out[outOff + 3] = FBi;
        out[outOff + 4] = FCr;
        out[outOff + 5] = 0;
        out[outOff + 6] = FDr;
        out[outOff + 7] = FDi;
      };
    }
  });

  // node_modules/next-pow-2/np2.js
  var require_np2 = __commonJS({
    "node_modules/next-pow-2/np2.js"(exports, module) {
      module.exports = function(v2) {
        v2 += v2 === 0;
        --v2;
        v2 |= v2 >>> 1;
        v2 |= v2 >>> 2;
        v2 |= v2 >>> 4;
        v2 |= v2 >>> 8;
        v2 |= v2 >>> 16;
        return v2 + 1;
      };
    }
  });

  // src/app/components/tuner/__tests__/__snapshots__/tuner.component.spec.snap.js
  var tuner_component_spec_snap_exports = {};
  __export(tuner_component_spec_snap_exports, {
    snapshots: () => snapshots
  });
  var snapshots = {};
  snapshots["TunerComponent should equal snapshot"] = `<tn-tuner>
</tn-tuner>
`;

  // src/app/components/tuner/tuner-note.component.ts
  var tuner_note_component_exports = {};
  __export(tuner_note_component_exports, {
    TunerNoteComponent: () => TunerNoteComponent
  });

  // node_modules/@lit/reactive-element/css-tag.js
  var t = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var e = Symbol();
  var n = new Map();
  var s = class {
    constructor(t3, n6) {
      if (this._$cssResult$ = true, n6 !== e)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t3;
    }
    get styleSheet() {
      let e5 = n.get(this.cssText);
      return t && e5 === void 0 && (n.set(this.cssText, e5 = new CSSStyleSheet()), e5.replaceSync(this.cssText)), e5;
    }
    toString() {
      return this.cssText;
    }
  };
  var o = (t3) => new s(typeof t3 == "string" ? t3 : t3 + "", e);
  var r = (t3, ...n6) => {
    const o6 = t3.length === 1 ? t3[0] : n6.reduce((e5, n7, s5) => e5 + ((t4) => {
      if (t4._$cssResult$ === true)
        return t4.cssText;
      if (typeof t4 == "number")
        return t4;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(n7) + t3[s5 + 1], t3[0]);
    return new s(o6, e);
  };
  var i = (e5, n6) => {
    t ? e5.adoptedStyleSheets = n6.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet) : n6.forEach((t3) => {
      const n7 = document.createElement("style"), s5 = window.litNonce;
      s5 !== void 0 && n7.setAttribute("nonce", s5), n7.textContent = t3.cssText, e5.appendChild(n7);
    });
  };
  var S = t ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
    let e5 = "";
    for (const n6 of t4.cssRules)
      e5 += n6.cssText;
    return o(e5);
  })(t3) : t3;

  // node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e2 = window.trustedTypes;
  var r2 = e2 ? e2.emptyScript : "";
  var h = window.reactiveElementPolyfillSupport;
  var o2 = { toAttribute(t3, i5) {
    switch (i5) {
      case Boolean:
        t3 = t3 ? r2 : null;
        break;
      case Object:
      case Array:
        t3 = t3 == null ? t3 : JSON.stringify(t3);
    }
    return t3;
  }, fromAttribute(t3, i5) {
    let s5 = t3;
    switch (i5) {
      case Boolean:
        s5 = t3 !== null;
        break;
      case Number:
        s5 = t3 === null ? null : Number(t3);
        break;
      case Object:
      case Array:
        try {
          s5 = JSON.parse(t3);
        } catch (t4) {
          s5 = null;
        }
    }
    return s5;
  } };
  var n2 = (t3, i5) => i5 !== t3 && (i5 == i5 || t3 == t3);
  var l = { attribute: true, type: String, converter: o2, reflect: false, hasChanged: n2 };
  var a = class extends HTMLElement {
    constructor() {
      super(), this._$Et = new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
    }
    static addInitializer(t3) {
      var i5;
      (i5 = this.l) !== null && i5 !== void 0 || (this.l = []), this.l.push(t3);
    }
    static get observedAttributes() {
      this.finalize();
      const t3 = [];
      return this.elementProperties.forEach((i5, s5) => {
        const e5 = this._$Eh(s5, i5);
        e5 !== void 0 && (this._$Eu.set(e5, s5), t3.push(e5));
      }), t3;
    }
    static createProperty(t3, i5 = l) {
      if (i5.state && (i5.attribute = false), this.finalize(), this.elementProperties.set(t3, i5), !i5.noAccessor && !this.prototype.hasOwnProperty(t3)) {
        const s5 = typeof t3 == "symbol" ? Symbol() : "__" + t3, e5 = this.getPropertyDescriptor(t3, s5, i5);
        e5 !== void 0 && Object.defineProperty(this.prototype, t3, e5);
      }
    }
    static getPropertyDescriptor(t3, i5, s5) {
      return { get() {
        return this[i5];
      }, set(e5) {
        const r4 = this[t3];
        this[i5] = e5, this.requestUpdate(t3, r4, s5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t3) {
      return this.elementProperties.get(t3) || l;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized"))
        return false;
      this.finalized = true;
      const t3 = Object.getPrototypeOf(this);
      if (t3.finalize(), this.elementProperties = new Map(t3.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
        const t4 = this.properties, i5 = [...Object.getOwnPropertyNames(t4), ...Object.getOwnPropertySymbols(t4)];
        for (const s5 of i5)
          this.createProperty(s5, t4[s5]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i5) {
      const s5 = [];
      if (Array.isArray(i5)) {
        const e5 = new Set(i5.flat(1 / 0).reverse());
        for (const i6 of e5)
          s5.unshift(S(i6));
      } else
        i5 !== void 0 && s5.push(S(i5));
      return s5;
    }
    static _$Eh(t3, i5) {
      const s5 = i5.attribute;
      return s5 === false ? void 0 : typeof s5 == "string" ? s5 : typeof t3 == "string" ? t3.toLowerCase() : void 0;
    }
    o() {
      var t3;
      this._$Ep = new Promise((t4) => this.enableUpdating = t4), this._$AL = new Map(), this._$Em(), this.requestUpdate(), (t3 = this.constructor.l) === null || t3 === void 0 || t3.forEach((t4) => t4(this));
    }
    addController(t3) {
      var i5, s5;
      ((i5 = this._$Eg) !== null && i5 !== void 0 ? i5 : this._$Eg = []).push(t3), this.renderRoot !== void 0 && this.isConnected && ((s5 = t3.hostConnected) === null || s5 === void 0 || s5.call(t3));
    }
    removeController(t3) {
      var i5;
      (i5 = this._$Eg) === null || i5 === void 0 || i5.splice(this._$Eg.indexOf(t3) >>> 0, 1);
    }
    _$Em() {
      this.constructor.elementProperties.forEach((t3, i5) => {
        this.hasOwnProperty(i5) && (this._$Et.set(i5, this[i5]), delete this[i5]);
      });
    }
    createRenderRoot() {
      var t3;
      const s5 = (t3 = this.shadowRoot) !== null && t3 !== void 0 ? t3 : this.attachShadow(this.constructor.shadowRootOptions);
      return i(s5, this.constructor.elementStyles), s5;
    }
    connectedCallback() {
      var t3;
      this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t3 = this._$Eg) === null || t3 === void 0 || t3.forEach((t4) => {
        var i5;
        return (i5 = t4.hostConnected) === null || i5 === void 0 ? void 0 : i5.call(t4);
      });
    }
    enableUpdating(t3) {
    }
    disconnectedCallback() {
      var t3;
      (t3 = this._$Eg) === null || t3 === void 0 || t3.forEach((t4) => {
        var i5;
        return (i5 = t4.hostDisconnected) === null || i5 === void 0 ? void 0 : i5.call(t4);
      });
    }
    attributeChangedCallback(t3, i5, s5) {
      this._$AK(t3, s5);
    }
    _$ES(t3, i5, s5 = l) {
      var e5, r4;
      const h3 = this.constructor._$Eh(t3, s5);
      if (h3 !== void 0 && s5.reflect === true) {
        const n6 = ((r4 = (e5 = s5.converter) === null || e5 === void 0 ? void 0 : e5.toAttribute) !== null && r4 !== void 0 ? r4 : o2.toAttribute)(i5, s5.type);
        this._$Ei = t3, n6 == null ? this.removeAttribute(h3) : this.setAttribute(h3, n6), this._$Ei = null;
      }
    }
    _$AK(t3, i5) {
      var s5, e5, r4;
      const h3 = this.constructor, n6 = h3._$Eu.get(t3);
      if (n6 !== void 0 && this._$Ei !== n6) {
        const t4 = h3.getPropertyOptions(n6), l4 = t4.converter, a3 = (r4 = (e5 = (s5 = l4) === null || s5 === void 0 ? void 0 : s5.fromAttribute) !== null && e5 !== void 0 ? e5 : typeof l4 == "function" ? l4 : null) !== null && r4 !== void 0 ? r4 : o2.fromAttribute;
        this._$Ei = n6, this[n6] = a3(i5, t4.type), this._$Ei = null;
      }
    }
    requestUpdate(t3, i5, s5) {
      let e5 = true;
      t3 !== void 0 && (((s5 = s5 || this.constructor.getPropertyOptions(t3)).hasChanged || n2)(this[t3], i5) ? (this._$AL.has(t3) || this._$AL.set(t3, i5), s5.reflect === true && this._$Ei !== t3 && (this._$E_ === void 0 && (this._$E_ = new Map()), this._$E_.set(t3, s5))) : e5 = false), !this.isUpdatePending && e5 && (this._$Ep = this._$EC());
    }
    async _$EC() {
      this.isUpdatePending = true;
      try {
        await this._$Ep;
      } catch (t4) {
        Promise.reject(t4);
      }
      const t3 = this.scheduleUpdate();
      return t3 != null && await t3, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t3;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Et && (this._$Et.forEach((t4, i6) => this[i6] = t4), this._$Et = void 0);
      let i5 = false;
      const s5 = this._$AL;
      try {
        i5 = this.shouldUpdate(s5), i5 ? (this.willUpdate(s5), (t3 = this._$Eg) === null || t3 === void 0 || t3.forEach((t4) => {
          var i6;
          return (i6 = t4.hostUpdate) === null || i6 === void 0 ? void 0 : i6.call(t4);
        }), this.update(s5)) : this._$EU();
      } catch (t4) {
        throw i5 = false, this._$EU(), t4;
      }
      i5 && this._$AE(s5);
    }
    willUpdate(t3) {
    }
    _$AE(t3) {
      var i5;
      (i5 = this._$Eg) === null || i5 === void 0 || i5.forEach((t4) => {
        var i6;
        return (i6 = t4.hostUpdated) === null || i6 === void 0 ? void 0 : i6.call(t4);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
    }
    _$EU() {
      this._$AL = new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$Ep;
    }
    shouldUpdate(t3) {
      return true;
    }
    update(t3) {
      this._$E_ !== void 0 && (this._$E_.forEach((t4, i5) => this._$ES(i5, this[i5], t4)), this._$E_ = void 0), this._$EU();
    }
    updated(t3) {
    }
    firstUpdated(t3) {
    }
  };
  a.finalized = true, a.elementProperties = new Map(), a.elementStyles = [], a.shadowRootOptions = { mode: "open" }, h == null || h({ ReactiveElement: a }), ((s2 = globalThis.reactiveElementVersions) !== null && s2 !== void 0 ? s2 : globalThis.reactiveElementVersions = []).push("1.0.2");

  // node_modules/lit-html/lit-html.js
  var t2;
  var i2 = globalThis.trustedTypes;
  var s3 = i2 ? i2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
  var e3 = `lit$${(Math.random() + "").slice(9)}$`;
  var o3 = "?" + e3;
  var n3 = `<${o3}>`;
  var l2 = document;
  var h2 = (t3 = "") => l2.createComment(t3);
  var r3 = (t3) => t3 === null || typeof t3 != "object" && typeof t3 != "function";
  var d = Array.isArray;
  var u = (t3) => {
    var i5;
    return d(t3) || typeof ((i5 = t3) === null || i5 === void 0 ? void 0 : i5[Symbol.iterator]) == "function";
  };
  var c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var a2 = />/g;
  var f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
  var _ = /'/g;
  var m = /"/g;
  var g = /^(?:script|style|textarea)$/i;
  var $ = (t3) => (i5, ...s5) => ({ _$litType$: t3, strings: i5, values: s5 });
  var p = $(1);
  var y = $(2);
  var b = Symbol.for("lit-noChange");
  var T = Symbol.for("lit-nothing");
  var x = new WeakMap();
  var w = (t3, i5, s5) => {
    var e5, o6;
    const n6 = (e5 = s5 == null ? void 0 : s5.renderBefore) !== null && e5 !== void 0 ? e5 : i5;
    let l4 = n6._$litPart$;
    if (l4 === void 0) {
      const t4 = (o6 = s5 == null ? void 0 : s5.renderBefore) !== null && o6 !== void 0 ? o6 : null;
      n6._$litPart$ = l4 = new N(i5.insertBefore(h2(), t4), t4, void 0, s5 != null ? s5 : {});
    }
    return l4._$AI(t3), l4;
  };
  var A = l2.createTreeWalker(l2, 129, null, false);
  var C = (t3, i5) => {
    const o6 = t3.length - 1, l4 = [];
    let h3, r4 = i5 === 2 ? "<svg>" : "", d2 = c;
    for (let i6 = 0; i6 < o6; i6++) {
      const s5 = t3[i6];
      let o7, u3, $2 = -1, p2 = 0;
      for (; p2 < s5.length && (d2.lastIndex = p2, u3 = d2.exec(s5), u3 !== null); )
        p2 = d2.lastIndex, d2 === c ? u3[1] === "!--" ? d2 = v : u3[1] !== void 0 ? d2 = a2 : u3[2] !== void 0 ? (g.test(u3[2]) && (h3 = RegExp("</" + u3[2], "g")), d2 = f) : u3[3] !== void 0 && (d2 = f) : d2 === f ? u3[0] === ">" ? (d2 = h3 != null ? h3 : c, $2 = -1) : u3[1] === void 0 ? $2 = -2 : ($2 = d2.lastIndex - u3[2].length, o7 = u3[1], d2 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _) : d2 === m || d2 === _ ? d2 = f : d2 === v || d2 === a2 ? d2 = c : (d2 = f, h3 = void 0);
      const y2 = d2 === f && t3[i6 + 1].startsWith("/>") ? " " : "";
      r4 += d2 === c ? s5 + n3 : $2 >= 0 ? (l4.push(o7), s5.slice(0, $2) + "$lit$" + s5.slice($2) + e3 + y2) : s5 + e3 + ($2 === -2 ? (l4.push(void 0), i6) : y2);
    }
    const u2 = r4 + (t3[o6] || "<?>") + (i5 === 2 ? "</svg>" : "");
    return [s3 !== void 0 ? s3.createHTML(u2) : u2, l4];
  };
  var P = class {
    constructor({ strings: t3, _$litType$: s5 }, n6) {
      let l4;
      this.parts = [];
      let r4 = 0, d2 = 0;
      const u2 = t3.length - 1, c2 = this.parts, [v2, a3] = C(t3, s5);
      if (this.el = P.createElement(v2, n6), A.currentNode = this.el.content, s5 === 2) {
        const t4 = this.el.content, i5 = t4.firstChild;
        i5.remove(), t4.append(...i5.childNodes);
      }
      for (; (l4 = A.nextNode()) !== null && c2.length < u2; ) {
        if (l4.nodeType === 1) {
          if (l4.hasAttributes()) {
            const t4 = [];
            for (const i5 of l4.getAttributeNames())
              if (i5.endsWith("$lit$") || i5.startsWith(e3)) {
                const s6 = a3[d2++];
                if (t4.push(i5), s6 !== void 0) {
                  const t5 = l4.getAttribute(s6.toLowerCase() + "$lit$").split(e3), i6 = /([.?@])?(.*)/.exec(s6);
                  c2.push({ type: 1, index: r4, name: i6[2], strings: t5, ctor: i6[1] === "." ? M : i6[1] === "?" ? H : i6[1] === "@" ? I : S2 });
                } else
                  c2.push({ type: 6, index: r4 });
              }
            for (const i5 of t4)
              l4.removeAttribute(i5);
          }
          if (g.test(l4.tagName)) {
            const t4 = l4.textContent.split(e3), s6 = t4.length - 1;
            if (s6 > 0) {
              l4.textContent = i2 ? i2.emptyScript : "";
              for (let i5 = 0; i5 < s6; i5++)
                l4.append(t4[i5], h2()), A.nextNode(), c2.push({ type: 2, index: ++r4 });
              l4.append(t4[s6], h2());
            }
          }
        } else if (l4.nodeType === 8)
          if (l4.data === o3)
            c2.push({ type: 2, index: r4 });
          else {
            let t4 = -1;
            for (; (t4 = l4.data.indexOf(e3, t4 + 1)) !== -1; )
              c2.push({ type: 7, index: r4 }), t4 += e3.length - 1;
          }
        r4++;
      }
    }
    static createElement(t3, i5) {
      const s5 = l2.createElement("template");
      return s5.innerHTML = t3, s5;
    }
  };
  function V(t3, i5, s5 = t3, e5) {
    var o6, n6, l4, h3;
    if (i5 === b)
      return i5;
    let d2 = e5 !== void 0 ? (o6 = s5._$Cl) === null || o6 === void 0 ? void 0 : o6[e5] : s5._$Cu;
    const u2 = r3(i5) ? void 0 : i5._$litDirective$;
    return (d2 == null ? void 0 : d2.constructor) !== u2 && ((n6 = d2 == null ? void 0 : d2._$AO) === null || n6 === void 0 || n6.call(d2, false), u2 === void 0 ? d2 = void 0 : (d2 = new u2(t3), d2._$AT(t3, s5, e5)), e5 !== void 0 ? ((l4 = (h3 = s5)._$Cl) !== null && l4 !== void 0 ? l4 : h3._$Cl = [])[e5] = d2 : s5._$Cu = d2), d2 !== void 0 && (i5 = V(t3, d2._$AS(t3, i5.values), d2, e5)), i5;
  }
  var E = class {
    constructor(t3, i5) {
      this.v = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    p(t3) {
      var i5;
      const { el: { content: s5 }, parts: e5 } = this._$AD, o6 = ((i5 = t3 == null ? void 0 : t3.creationScope) !== null && i5 !== void 0 ? i5 : l2).importNode(s5, true);
      A.currentNode = o6;
      let n6 = A.nextNode(), h3 = 0, r4 = 0, d2 = e5[0];
      for (; d2 !== void 0; ) {
        if (h3 === d2.index) {
          let i6;
          d2.type === 2 ? i6 = new N(n6, n6.nextSibling, this, t3) : d2.type === 1 ? i6 = new d2.ctor(n6, d2.name, d2.strings, this, t3) : d2.type === 6 && (i6 = new L(n6, this, t3)), this.v.push(i6), d2 = e5[++r4];
        }
        h3 !== (d2 == null ? void 0 : d2.index) && (n6 = A.nextNode(), h3++);
      }
      return o6;
    }
    m(t3) {
      let i5 = 0;
      for (const s5 of this.v)
        s5 !== void 0 && (s5.strings !== void 0 ? (s5._$AI(t3, s5, i5), i5 += s5.strings.length - 2) : s5._$AI(t3[i5])), i5++;
    }
  };
  var N = class {
    constructor(t3, i5, s5, e5) {
      var o6;
      this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s5, this.options = e5, this._$Cg = (o6 = e5 == null ? void 0 : e5.isConnected) === null || o6 === void 0 || o6;
    }
    get _$AU() {
      var t3, i5;
      return (i5 = (t3 = this._$AM) === null || t3 === void 0 ? void 0 : t3._$AU) !== null && i5 !== void 0 ? i5 : this._$Cg;
    }
    get parentNode() {
      let t3 = this._$AA.parentNode;
      const i5 = this._$AM;
      return i5 !== void 0 && t3.nodeType === 11 && (t3 = i5.parentNode), t3;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t3, i5 = this) {
      t3 = V(this, t3, i5), r3(t3) ? t3 === T || t3 == null || t3 === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : t3 !== this._$AH && t3 !== b && this.$(t3) : t3._$litType$ !== void 0 ? this.T(t3) : t3.nodeType !== void 0 ? this.S(t3) : u(t3) ? this.M(t3) : this.$(t3);
    }
    A(t3, i5 = this._$AB) {
      return this._$AA.parentNode.insertBefore(t3, i5);
    }
    S(t3) {
      this._$AH !== t3 && (this._$AR(), this._$AH = this.A(t3));
    }
    $(t3) {
      this._$AH !== T && r3(this._$AH) ? this._$AA.nextSibling.data = t3 : this.S(l2.createTextNode(t3)), this._$AH = t3;
    }
    T(t3) {
      var i5;
      const { values: s5, _$litType$: e5 } = t3, o6 = typeof e5 == "number" ? this._$AC(t3) : (e5.el === void 0 && (e5.el = P.createElement(e5.h, this.options)), e5);
      if (((i5 = this._$AH) === null || i5 === void 0 ? void 0 : i5._$AD) === o6)
        this._$AH.m(s5);
      else {
        const t4 = new E(o6, this), i6 = t4.p(this.options);
        t4.m(s5), this.S(i6), this._$AH = t4;
      }
    }
    _$AC(t3) {
      let i5 = x.get(t3.strings);
      return i5 === void 0 && x.set(t3.strings, i5 = new P(t3)), i5;
    }
    M(t3) {
      d(this._$AH) || (this._$AH = [], this._$AR());
      const i5 = this._$AH;
      let s5, e5 = 0;
      for (const o6 of t3)
        e5 === i5.length ? i5.push(s5 = new N(this.A(h2()), this.A(h2()), this, this.options)) : s5 = i5[e5], s5._$AI(o6), e5++;
      e5 < i5.length && (this._$AR(s5 && s5._$AB.nextSibling, e5), i5.length = e5);
    }
    _$AR(t3 = this._$AA.nextSibling, i5) {
      var s5;
      for ((s5 = this._$AP) === null || s5 === void 0 || s5.call(this, false, true, i5); t3 && t3 !== this._$AB; ) {
        const i6 = t3.nextSibling;
        t3.remove(), t3 = i6;
      }
    }
    setConnected(t3) {
      var i5;
      this._$AM === void 0 && (this._$Cg = t3, (i5 = this._$AP) === null || i5 === void 0 || i5.call(this, t3));
    }
  };
  var S2 = class {
    constructor(t3, i5, s5, e5, o6) {
      this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e5, this.options = o6, s5.length > 2 || s5[0] !== "" || s5[1] !== "" ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = T;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3, i5 = this, s5, e5) {
      const o6 = this.strings;
      let n6 = false;
      if (o6 === void 0)
        t3 = V(this, t3, i5, 0), n6 = !r3(t3) || t3 !== this._$AH && t3 !== b, n6 && (this._$AH = t3);
      else {
        const e6 = t3;
        let l4, h3;
        for (t3 = o6[0], l4 = 0; l4 < o6.length - 1; l4++)
          h3 = V(this, e6[s5 + l4], i5, l4), h3 === b && (h3 = this._$AH[l4]), n6 || (n6 = !r3(h3) || h3 !== this._$AH[l4]), h3 === T ? t3 = T : t3 !== T && (t3 += (h3 != null ? h3 : "") + o6[l4 + 1]), this._$AH[l4] = h3;
      }
      n6 && !e5 && this.k(t3);
    }
    k(t3) {
      t3 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 != null ? t3 : "");
    }
  };
  var M = class extends S2 {
    constructor() {
      super(...arguments), this.type = 3;
    }
    k(t3) {
      this.element[this.name] = t3 === T ? void 0 : t3;
    }
  };
  var k = i2 ? i2.emptyScript : "";
  var H = class extends S2 {
    constructor() {
      super(...arguments), this.type = 4;
    }
    k(t3) {
      t3 && t3 !== T ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
    }
  };
  var I = class extends S2 {
    constructor(t3, i5, s5, e5, o6) {
      super(t3, i5, s5, e5, o6), this.type = 5;
    }
    _$AI(t3, i5 = this) {
      var s5;
      if ((t3 = (s5 = V(this, t3, i5, 0)) !== null && s5 !== void 0 ? s5 : T) === b)
        return;
      const e5 = this._$AH, o6 = t3 === T && e5 !== T || t3.capture !== e5.capture || t3.once !== e5.once || t3.passive !== e5.passive, n6 = t3 !== T && (e5 === T || o6);
      o6 && this.element.removeEventListener(this.name, this, e5), n6 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
    }
    handleEvent(t3) {
      var i5, s5;
      typeof this._$AH == "function" ? this._$AH.call((s5 = (i5 = this.options) === null || i5 === void 0 ? void 0 : i5.host) !== null && s5 !== void 0 ? s5 : this.element, t3) : this._$AH.handleEvent(t3);
    }
  };
  var L = class {
    constructor(t3, i5, s5) {
      this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s5;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3) {
      V(this, t3);
    }
  };
  var z = window.litHtmlPolyfillSupport;
  z == null || z(P, N), ((t2 = globalThis.litHtmlVersions) !== null && t2 !== void 0 ? t2 : globalThis.litHtmlVersions = []).push("2.0.2");

  // node_modules/lit-element/lit-element.js
  var l3;
  var o4;
  var s4 = class extends a {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
    }
    createRenderRoot() {
      var t3, e5;
      const i5 = super.createRenderRoot();
      return (t3 = (e5 = this.renderOptions).renderBefore) !== null && t3 !== void 0 || (e5.renderBefore = i5.firstChild), i5;
    }
    update(t3) {
      const i5 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Dt = w(i5, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t3;
      super.connectedCallback(), (t3 = this._$Dt) === null || t3 === void 0 || t3.setConnected(true);
    }
    disconnectedCallback() {
      var t3;
      super.disconnectedCallback(), (t3 = this._$Dt) === null || t3 === void 0 || t3.setConnected(false);
    }
    render() {
      return b;
    }
  };
  s4.finalized = true, s4._$litElement$ = true, (l3 = globalThis.litElementHydrateSupport) === null || l3 === void 0 || l3.call(globalThis, { LitElement: s4 });
  var n4 = globalThis.litElementPolyfillSupport;
  n4 == null || n4({ LitElement: s4 });
  ((o4 = globalThis.litElementVersions) !== null && o4 !== void 0 ? o4 : globalThis.litElementVersions = []).push("3.0.2");

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var n5 = (n6) => (e5) => typeof e5 == "function" ? ((n7, e6) => (window.customElements.define(n7, e6), e6))(n6, e5) : ((n7, e6) => {
    const { kind: t3, elements: i5 } = e6;
    return { kind: t3, elements: i5, finisher(e7) {
      window.customElements.define(n7, e7);
    } };
  })(n6, e5);

  // node_modules/@lit/reactive-element/decorators/property.js
  var i3 = (i5, e5) => e5.kind === "method" && e5.descriptor && !("value" in e5.descriptor) ? { ...e5, finisher(n6) {
    n6.createProperty(e5.key, i5);
  } } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e5.key, initializer() {
    typeof e5.initializer == "function" && (this[e5.key] = e5.initializer.call(this));
  }, finisher(n6) {
    n6.createProperty(e5.key, i5);
  } };
  function e4(e5) {
    return (n6, t3) => t3 !== void 0 ? ((i5, e6, n7) => {
      e6.constructor.createProperty(n7, i5);
    })(e5, n6, t3) : i3(e5, n6);
  }

  // node_modules/@lit/reactive-element/decorators/base.js
  var o5 = ({ finisher: e5, descriptor: t3 }) => (o6, n6) => {
    var r4;
    if (n6 === void 0) {
      const n7 = (r4 = o6.originalKey) !== null && r4 !== void 0 ? r4 : o6.key, i5 = t3 != null ? { kind: "method", placement: "prototype", key: n7, descriptor: t3(o6.key) } : { ...o6, key: n7 };
      return e5 != null && (i5.finisher = function(t4) {
        e5(t4, n7);
      }), i5;
    }
    {
      const r5 = o6.constructor;
      t3 !== void 0 && Object.defineProperty(o6, n6, t3(n6)), e5 == null || e5(r5, n6);
    }
  };

  // node_modules/@lit/reactive-element/decorators/query.js
  function i4(i5, n6) {
    return o5({ descriptor: (o6) => {
      const t3 = { get() {
        var o7, n7;
        return (n7 = (o7 = this.renderRoot) === null || o7 === void 0 ? void 0 : o7.querySelector(i5)) !== null && n7 !== void 0 ? n7 : null;
      }, enumerable: true, configurable: true };
      if (n6) {
        const n7 = typeof o6 == "symbol" ? Symbol() : "__" + o6;
        t3.get = function() {
          var o7, t4;
          return this[n7] === void 0 && (this[n7] = (t4 = (o7 = this.renderRoot) === null || o7 === void 0 ? void 0 : o7.querySelector(i5)) !== null && t4 !== void 0 ? t4 : null), this[n7];
        };
      }
      return t3;
    } });
  }

  // src/config.ts
  var CONFIG = {
    accidentalMode: 1,
    frequencyOfA: 440,
    debugMode: undefined
  };

  // src/app/utilities/math-utility.ts
  var MathUtility = class {
  };
  MathUtility.map = (value, range1, range2) => (value - range1[0]) * (range2[1] - range2[0]) / (range1[1] - range1[0]) + range2[0];
  MathUtility.clamp = (value, range) => Math.min(Math.max(value, range[0]), range[1]);
  MathUtility.round = (value, decimals) => Number(Math.round(Number(value + "e" + decimals)) + "e-" + decimals);

  // src/app/utilities/note-utility.ts
  var NOTES_IN_OCTAVE = 12;
  var NAMES_WITH_SHARPS = ["C", "C", "D", "D", "E", "F", "F", "G", "G", "A", "A", "B"];
  var ACCIDENTAL_INDEXES = [1, 3, 6, 8, 10];
  var NAMES_WITH_FLATS = ["C", "D", "D", "E", "E", "F", "G", "G", "A", "A", "B", "B"];
  var ACCIDENTALS;
  (function(ACCIDENTALS2) {
    ACCIDENTALS2[ACCIDENTALS2["sharp"] = 0] = "sharp";
    ACCIDENTALS2[ACCIDENTALS2["flat"] = 1] = "flat";
  })(ACCIDENTALS || (ACCIDENTALS = {}));
  var Note = class {
    get letter() {
      return this.lookupLetter();
    }
    get accidental() {
      return this.lookupAccidental();
    }
    constructor(index) {
      this.index = MathUtility.clamp(index, [0, 127]);
      this.octave = Math.floor(index / NOTES_IN_OCTAVE) - 1;
    }
    lookupLetter() {
      return CONFIG.accidentalMode ? NAMES_WITH_SHARPS[this.index % NOTES_IN_OCTAVE] : NAMES_WITH_FLATS[this.index % NOTES_IN_OCTAVE];
    }
    lookupAccidental() {
      if (ACCIDENTAL_INDEXES.includes(this.index % NOTES_IN_OCTAVE)) {
        return CONFIG.accidentalMode ? "#" : "b";
      } else {
        return "";
      }
    }
  };
  var CN1_NOTE = new Note(0);
  var A4_NOTE = new Note(69);
  var G9_NOTE = new Note(127);
  var NoteUtility = class {
    static freqToNote(frequency) {
      if (frequency < this.noteToPitch(CN1_NOTE)) {
        return CN1_NOTE;
      }
      if (frequency > this.noteToPitch(G9_NOTE)) {
        return G9_NOTE;
      }
      const halfSteps = Math.round(NOTES_IN_OCTAVE * Math.log2(frequency / this.noteToPitch(CN1_NOTE)));
      if (isNaN(halfSteps)) {
        throw new Error("calculated frequency produced NaN");
      }
      return new Note(halfSteps);
    }
    static noteToPitch(note) {
      const halfStepsFromA = note.index - A4_NOTE.index;
      const frequencyBetweenNotes = __pow(2, 1 / NOTES_IN_OCTAVE);
      return CONFIG.frequencyOfA * __pow(frequencyBetweenNotes, halfStepsFromA);
    }
  };

  // src/app/components/tuner/tuner-note.component.ts
  var TunerNoteComponentStyles = r`
  .tuner-note-container {
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: "Lalezar";
  }

  .tuner-note-border {
    stroke: var(--outline-color);
  }

  .tuner-note-letter {
    stroke: var(--outline-color);
    stroke-width: 3;
    font-size: 4em;
  }

  .tuner-note-letter-mask {
    stroke: black;
    fill: white;
    font-size: 4em;
  }

  .tuner-note-accidental {
    stroke: var(--outline-color);
    stroke-width: 1;
    font-size: 2em;
  }

  .tuner-note-accidental-mask {
    stroke: black;
    stroke-width: 1;
    fill: white;
    font-size: 2em;
  }

  .tuner-note-octave {
    stroke: var(--outline-color);
    stroke-width: 1;
    font-size: 2em;
  }

  .tuner-note-octave-mask {
    stroke: black;
    stroke-width: 1;
    fill: white;
    font-size: 2em;
  }

  .tuner-liquid {
    fill: var(--primary-color);
  }

  .test {
    stroke: var(--outline-color);
    stroke-width: 3;
    fill: var(--primary-color);
    font-weight: bold;
  }
`;
  var TunerNoteComponent = class extends s4 {
    constructor() {
      super();
      this.note = new Note(0);
      this.clarity = 1;
      this.accuracy = 0;
      this.accuracyBuffer = [TunerNoteComponent.bufferSize];
      this.heightAnimator = new HeightAnimatorComponent();
    }
    updateHeightAnimation() {
      if (!this.heightAnimatorReference) {
        return;
      } else {
        this.heightAnimator.reference = this.heightAnimatorReference;
      }
      const newHeight = MathUtility.map(this.accuracy, [0, 1], [90, 25]);
      this.heightAnimator.to = newHeight + "";
    }
    update(changedProperties) {
      super.update(changedProperties);
      if (isNaN(Number(changedProperties.get("accuracy")))) {
        return;
      }
      this.updateHeightAnimation();
    }
    render() {
      return p`
            <div class="tuner-note-container">
                <svg id="view" viewBox="0 0 100 100" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <use href="#note-letter" class="tuner-note-letter"/>

                    <use href="#liquid-effect" mask="url(#note-mask)"/>

                    <use href="#note-octave" class="tuner-note-octave"/>
                    <use href="#note-accidental" class="tuner-note-accidental"/>

                    <defs>
                        <!-- Define the text used in the scene -->
                        <text id="note-letter" x="50%" y="50%" dominant-baseline="central"
                              text-anchor="middle">
                            ${this.note.letter}
                        </text>
                        <text id="note-accidental" x="65%" y="25%" dominant-baseline="central"
                              text-anchor="middle">
                            ${this.note.accidental}
                        </text>
                        <text id="note-octave" x="65%" y="65%" dominant-baseline="central" text-anchor="middle">
                            ${this.note.octave}
                        </text>

                        <!-- Defines the liquid effect that fills up the note -->
                        <g id="liquid-effect" class="tuner-liquid">
                            <rect width="50%" height="65%"/>
                            <path id="liquid-top"
                                  d="M 0,0.3 C 50,-4 0,-4 50,0"/>

                            <!-- Animates the top of the liquid -->
                            <animate href="#liquid-top"
                                     attributeName="d"
                                     attributeType="XML"
                                     values="M 0,0.3 C 12.5,0 37.5,-10 50,0; 
                                    M 0,0.3 C 12.5,-10 37.5,0 50,0; 
                                    M 0,0.3 C 12.5,0 37.5,-10 50,0"
                                     dur="0.7s"
                                     calcMode="spline"
                                     keySplines="0.6 0.3 0.3 1; 0.6 0.3 0.3 1"
                                     repeatCount="indefinite"/>

                            <!-- Animates the liquid height -->
                            <animateTransform
                                    id="height-animator"
                                    @endEvent="${this.heightAnimator.onEndEvent}"
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="translate"
                                    fill="freeze"
                                    restart="whenNotActive"
                                    values="25, 20; 25, 35"
                                    calcMode="spline"
                                    keySplines="0.5 0 0.5 1"
                                    dur="0.5s"/>
                        </g>

                        <!-- Defines the mask used to create the cutout of the liquid -->
                        <mask id="note-mask">
                            <use href="#note-letter" class="tuner-note-letter-mask"/>
                        </mask>
                    </defs>
                </svg>
            </div>
        `;
    }
  };
  TunerNoteComponent.styles = TunerNoteComponentStyles;
  TunerNoteComponent.bufferSize = 25;
  __decorateClass([
    e4()
  ], TunerNoteComponent.prototype, "note", 2);
  __decorateClass([
    e4()
  ], TunerNoteComponent.prototype, "clarity", 2);
  __decorateClass([
    e4({ type: Number })
  ], TunerNoteComponent.prototype, "accuracy", 2);
  __decorateClass([
    i4("#height-animator")
  ], TunerNoteComponent.prototype, "heightAnimatorReference", 2);
  TunerNoteComponent = __decorateClass([
    n5("tn-tuner-note")
  ], TunerNoteComponent);
  var _HeightAnimatorComponent = class {
    set reference(source) {
      this._reference = source;
    }
    get from() {
      return this._reference.getAttribute("values").match(_HeightAnimatorComponent.fromMatcher)[0];
    }
    set from(value) {
      this._reference.setAttribute("values", this._reference.getAttribute("values").replace(_HeightAnimatorComponent.fromMatcher, value));
    }
    get to() {
      return this._reference.getAttribute("values").match(_HeightAnimatorComponent.toMatcher)[0];
    }
    set to(value) {
      this._reference.setAttribute("values", this._reference.getAttribute("values").replace(_HeightAnimatorComponent.toMatcher, value));
    }
    onEndEvent() {
      this.from = this.to;
    }
  };
  var HeightAnimatorComponent = _HeightAnimatorComponent;
  HeightAnimatorComponent.fromMatcher = /-?\d+\.?\d*(?=;)/g;
  HeightAnimatorComponent.toMatcher = /-?\d+\.?\d*$/g;

  // src/app/components/tuner/tuner-ring.component.ts
  var tuner_ring_component_exports = {};
  __export(tuner_ring_component_exports, {
    CircleComponent: () => CircleComponent,
    TunerRingComponent: () => TunerRingComponent
  });
  var import_bezier_easing = __toModule(require_src());
  var TunerRingComponentStyles = r`
  :host {
    --needle-degree: 0rad;
    --opacity: 1;
  }

  .tuner-ring {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .tuner-needle {
    --width: 5px;

    background: white;

    width: var(--width);
    height: 50%;

    position: absolute;
    left: calc(50% - (var(--width) / 2));

    opacity: var(--opacity);
    transform: rotate(var(--needle-degree));
    transform-origin: bottom;
  }

  .ring {
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    outline: 0.5rem solid white;
    outline-offset: -0.25rem;
  }

  .circles {
    outline: red;
  }
`;
  var TunerRingComponent = class extends s4 {
    constructor() {
      super(...arguments);
      this.accuracy = 0;
      this.frequencyDegree = 0;
    }
    updated() {
      this.frequencyDegree = this.convertAccuracyToRadians();
      this.style.setProperty("--needle-degree", this.frequencyDegree + "rad");
    }
    convertAccuracyToRadians() {
      let radians = this.accuracy * (Math.PI / 2) - Math.PI / 2;
      if (this.pitchAccidental == ACCIDENTALS.sharp) {
        radians *= -1;
      }
      return radians;
    }
    render() {
      const circles = [];
      const circleCount = 16;
      for (let i5 = 0; i5 < circleCount; i5++) {
        const offsetDegree = Math.PI / circleCount * i5;
        circles.push(p`
                <tn-circle .index="${i5}" .frequencyDegree="${this.frequencyDegree}"
                           .targetDegree="${offsetDegree - Math.PI / 2}"></tn-circle>
            `);
      }
      return p`
            <div class="tuner-ring">
                <!--                <div class="tuner-needle"></div>-->
                <div class="ring">
                    <span class="circles">
                        ${circles}
                    </span>
                </div>
            </div>
        `;
    }
  };
  TunerRingComponent.styles = TunerRingComponentStyles;
  __decorateClass([
    e4()
  ], TunerRingComponent.prototype, "accuracy", 2);
  __decorateClass([
    e4()
  ], TunerRingComponent.prototype, "pitchAccidental", 2);
  TunerRingComponent = __decorateClass([
    n5("tn-tuner-ring")
  ], TunerRingComponent);
  var CircleComponentStyles = r`
  :host {
    --bottom: 0%;
    --left: 0%;
    --x-scale: 1;
    --y-scale: 1;
    --z-index: 0;
    --inner-opacity: 1;
    --opacity: 1;
    --angle: 0;

    bottom: var(--bottom);
    left: var(--left);
    position: absolute;
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
    //outline: 0.1rem solid var(--outline-color);
    //outline-offset: -0.1rem;
    border: 0.1rem solid var(--outline-color);
    background-color: var(--primary-color);
    transform: translate(-50%, 50%) rotate(var(--angle)) scaleX(var(--x-scale)) scaleY(var(--y-scale));
    z-index: var(--z-index);
    opacity: var(--opacity);

    transition: all cubic-bezier(0, 0, .2, 1.3) 300ms, z-index 0ms;
  }

`;
  var CircleComponent = class extends s4 {
    constructor() {
      super(...arguments);
      this.frequencyDegree = 0;
      this.targetDegree = 0;
      this.index = 0;
    }
    connectedCallback() {
      super.connectedCallback();
      this.setupPosition();
    }
    updated() {
      const difference = CircleComponent.angleDifference(this.targetDegree, this.frequencyDegree);
      const quarterCircle = [0, Math.PI];
      const falloff = (0, import_bezier_easing.default)(0, 0, 1, 0);
      const scale = MathUtility.map(difference, quarterCircle, [1, 0]);
      const inverseScale = MathUtility.map(difference, quarterCircle, [0, 1]);
      const size = falloff(scale) * 5;
      const squish = falloff(inverseScale) * 15;
      const opacity = size;
      const zIndex = Math.floor(MathUtility.map(difference, quarterCircle, [23, 4]));
      this.style.setProperty("--x-scale", size + squish + "");
      this.style.setProperty("--y-scale", size + "");
      this.style.setProperty("--z-index", zIndex + "");
      this.style.setProperty("--opacity", opacity + "");
    }
    static angleDifference(angle1, angle2) {
      let angle = angle1 - angle2;
      angle += angle > Math.PI ? -(2 * Math.PI) : angle < -Math.PI ? 2 * Math.PI : 0;
      return Math.abs(angle);
    }
    setupPosition() {
      const bottom = 50 * Math.cos(this.targetDegree) + 50 + "%";
      const left = 50 * Math.sin(this.targetDegree) + 50 + "%";
      this.style.setProperty("--bottom", bottom);
      this.style.setProperty("--left", left);
      this.style.setProperty("--angle", this.targetDegree + "rad");
    }
  };
  CircleComponent.styles = CircleComponentStyles;
  __decorateClass([
    e4()
  ], CircleComponent.prototype, "frequencyDegree", 2);
  __decorateClass([
    e4()
  ], CircleComponent.prototype, "targetDegree", 2);
  __decorateClass([
    e4()
  ], CircleComponent.prototype, "index", 2);
  CircleComponent = __decorateClass([
    n5("tn-circle")
  ], CircleComponent);

  // src/app/components/tuner/tuner.component.ts
  var tuner_component_exports = {};
  __export(tuner_component_exports, {
    TunerComponent: () => TunerComponent
  });

  // node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }

  // node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
  function _iterableToArrayLimit(arr, i5) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i5 && _arr.length === i5)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }

  // node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i5 = 0, arr2 = new Array(len); i5 < len; i5++) {
      arr2[i5] = arr[i5];
    }
    return arr2;
  }

  // node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
  function _unsupportedIterableToArray(o6, minLen) {
    if (!o6)
      return;
    if (typeof o6 === "string")
      return _arrayLikeToArray(o6, minLen);
    var n6 = Object.prototype.toString.call(o6).slice(8, -1);
    if (n6 === "Object" && o6.constructor)
      n6 = o6.constructor.name;
    if (n6 === "Map" || n6 === "Set")
      return Array.from(o6);
    if (n6 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n6))
      return _arrayLikeToArray(o6, minLen);
  }

  // node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  // node_modules/@babel/runtime/helpers/esm/slicedToArray.js
  function _slicedToArray(arr, i5) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i5) || _unsupportedIterableToArray(arr, i5) || _nonIterableRest();
  }

  // node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }

  // node_modules/@babel/runtime/helpers/esm/iterableToArray.js
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }

  // node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  // node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  // node_modules/@babel/runtime/helpers/esm/classCallCheck.js
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  // node_modules/@babel/runtime/helpers/esm/createClass.js
  function _defineProperties(target, props) {
    for (var i5 = 0; i5 < props.length; i5++) {
      var descriptor = props[i5];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  // node_modules/@babel/runtime/helpers/esm/defineProperty.js
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  // node_modules/pitchy/lib/index.mjs
  var import_fft = __toModule(require_fft());
  var import_next_pow_2 = __toModule(require_np2());
  var Autocorrelator = /* @__PURE__ */ function() {
    function Autocorrelator2(inputLength, bufferSupplier) {
      _classCallCheck(this, Autocorrelator2);
      _defineProperty(this, "_inputLength", void 0);
      _defineProperty(this, "_fft", void 0);
      _defineProperty(this, "_bufferSupplier", void 0);
      _defineProperty(this, "_paddedInputBuffer", void 0);
      _defineProperty(this, "_transformBuffer", void 0);
      _defineProperty(this, "_inverseBuffer", void 0);
      if (inputLength < 1) {
        throw new Error("Input length must be at least one");
      }
      this._inputLength = inputLength;
      this._fft = new import_fft.default((0, import_next_pow_2.default)(2 * inputLength));
      this._bufferSupplier = bufferSupplier;
      this._paddedInputBuffer = this._bufferSupplier(this._fft.size);
      this._transformBuffer = this._bufferSupplier(2 * this._fft.size);
      this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
    }
    _createClass(Autocorrelator2, [{
      key: "inputLength",
      get: function get() {
        return this._inputLength;
      }
    }, {
      key: "autocorrelate",
      value: function autocorrelate(input) {
        var output = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._bufferSupplier(input.length);
        if (input.length !== this._inputLength) {
          throw new Error("Input must have length ".concat(this._inputLength, " but had length ").concat(input.length));
        }
        for (var i5 = 0; i5 < input.length; i5++) {
          this._paddedInputBuffer[i5] = input[i5];
        }
        for (var _i = input.length; _i < this._paddedInputBuffer.length; _i++) {
          this._paddedInputBuffer[_i] = 0;
        }
        this._fft.realTransform(this._transformBuffer, this._paddedInputBuffer);
        this._fft.completeSpectrum(this._transformBuffer);
        var tb = this._transformBuffer;
        for (var _i2 = 0; _i2 < tb.length; _i2 += 2) {
          tb[_i2] = tb[_i2] * tb[_i2] + tb[_i2 + 1] * tb[_i2 + 1];
          tb[_i2 + 1] = 0;
        }
        this._fft.inverseTransform(this._inverseBuffer, this._transformBuffer);
        for (var _i3 = 0; _i3 < input.length; _i3++) {
          output[_i3] = this._inverseBuffer[2 * _i3];
        }
        return output;
      }
    }], [{
      key: "forFloat32Array",
      value: function forFloat32Array(inputLength) {
        return new Autocorrelator2(inputLength, function(length) {
          return new Float32Array(length);
        });
      }
    }, {
      key: "forFloat64Array",
      value: function forFloat64Array(inputLength) {
        return new Autocorrelator2(inputLength, function(length) {
          return new Float64Array(length);
        });
      }
    }, {
      key: "forNumberArray",
      value: function forNumberArray(inputLength) {
        return new Autocorrelator2(inputLength, function(length) {
          return Array(length);
        });
      }
    }]);
    return Autocorrelator2;
  }();
  function getKeyMaximumIndices(input) {
    var keyIndices = [];
    var lookingForMaximum = false;
    var max = -Infinity;
    var maxIndex = -1;
    for (var i5 = 1; i5 < input.length - 1; i5++) {
      if (input[i5 - 1] <= 0 && input[i5] > 0) {
        lookingForMaximum = true;
        maxIndex = i5;
        max = input[i5];
      } else if (input[i5 - 1] > 0 && input[i5] <= 0) {
        lookingForMaximum = false;
        if (maxIndex !== -1) {
          keyIndices.push(maxIndex);
        }
      } else if (lookingForMaximum && input[i5] > max) {
        max = input[i5];
        maxIndex = i5;
      }
    }
    return keyIndices;
  }
  function refineResultIndex(index, data) {
    var x0 = index - 1, x1 = index, x2 = index + 1;
    var _ref = [data[x0], data[x1], data[x2]], y0 = _ref[0], y1 = _ref[1], y2 = _ref[2];
    var a3 = y0 / 2 - y1 + y2 / 2;
    var b2 = -(y0 / 2) * (x1 + x2) + y1 * (x0 + x2) - y2 / 2 * (x0 + x1);
    var c2 = y0 * x1 * x2 / 2 - y1 * x0 * x2 + y2 * x0 * x1 / 2;
    var xMax = -b2 / (2 * a3);
    var yMax = a3 * xMax * xMax + b2 * xMax + c2;
    return [xMax, yMax];
  }
  var PitchDetector = /* @__PURE__ */ function() {
    function PitchDetector2(inputLength, bufferSupplier) {
      _classCallCheck(this, PitchDetector2);
      _defineProperty(this, "_autocorrelator", void 0);
      _defineProperty(this, "_nsdfBuffer", void 0);
      _defineProperty(this, "_clarityThreshold", 0.9);
      this._autocorrelator = new Autocorrelator(inputLength, bufferSupplier);
      this._nsdfBuffer = bufferSupplier(inputLength);
    }
    _createClass(PitchDetector2, [{
      key: "inputLength",
      get: function get() {
        return this._autocorrelator.inputLength;
      }
    }, {
      key: "findPitch",
      value: function findPitch(input, sampleRate) {
        var _this = this;
        this._nsdf(input);
        var keyMaximumIndices = getKeyMaximumIndices(this._nsdfBuffer);
        if (keyMaximumIndices.length === 0) {
          return [0, 0];
        }
        var nMax = Math.max.apply(Math, _toConsumableArray(keyMaximumIndices.map(function(i5) {
          return _this._nsdfBuffer[i5];
        })));
        var resultIndex = keyMaximumIndices.find(function(i5) {
          return _this._nsdfBuffer[i5] >= _this._clarityThreshold * nMax;
        });
        var _refineResultIndex = refineResultIndex(resultIndex, this._nsdfBuffer), _refineResultIndex2 = _slicedToArray(_refineResultIndex, 2), refinedResultIndex = _refineResultIndex2[0], clarity = _refineResultIndex2[1];
        return [sampleRate / refinedResultIndex, Math.min(clarity, 1)];
      }
    }, {
      key: "_nsdf",
      value: function _nsdf(input) {
        this._autocorrelator.autocorrelate(input, this._nsdfBuffer);
        var m2 = 2 * this._nsdfBuffer[0];
        var i5;
        for (i5 = 0; i5 < this._nsdfBuffer.length && m2 > 0; i5++) {
          this._nsdfBuffer[i5] = 2 * this._nsdfBuffer[i5] / m2;
          m2 -= Math.pow(input[i5], 2) + Math.pow(input[input.length - i5 - 1], 2);
        }
        for (; i5 < this._nsdfBuffer.length; i5++) {
          this._nsdfBuffer[i5] = 0;
        }
      }
    }], [{
      key: "forFloat32Array",
      value: function forFloat32Array(inputLength) {
        return new PitchDetector2(inputLength, function(length) {
          return new Float32Array(length);
        });
      }
    }, {
      key: "forFloat64Array",
      value: function forFloat64Array(inputLength) {
        return new PitchDetector2(inputLength, function(length) {
          return new Float64Array(length);
        });
      }
    }, {
      key: "forNumberArray",
      value: function forNumberArray(inputLength) {
        return new PitchDetector2(inputLength, function(length) {
          return Array(length);
        });
      }
    }]);
    return PitchDetector2;
  }();

  // src/app/utilities/log-utility.ts
  var Logger = class {
    static debug(...params) {
      if (CONFIG.debugMode) {
        console.debug(params);
      }
    }
    static error(...params) {
      console.error(params);
    }
  };

  // src/app/services/pitch-detector.service.ts
  var PitchDetectorService = class {
    constructor(audioSource = new MicSource(), refreshRate = 17) {
      this.refreshRate = refreshRate;
      this._audioSource = audioSource;
      this.pitchDetector = PitchDetector.forFloat32Array(this._audioSource.analyserNode.fftSize);
    }
    startListening() {
      this._audioSource.connect().then(() => {
        this.intervalReference = window.setInterval(this.listen.bind(this), this.refreshRate);
      });
    }
    stopListening() {
      window.clearInterval(this.intervalReference);
    }
    setOnListen(newListen) {
      this.onListen = newListen;
    }
    get pitch() {
      return this._pitch;
    }
    get clarity() {
      return this._clarity;
    }
    get audioSource() {
      return this._audioSource;
    }
    set audioSource(audioSource) {
      this._audioSource = audioSource;
    }
    listen() {
      const inputArray = new Float32Array(this.pitchDetector.inputLength);
      this._audioSource.analyserNode.getFloatTimeDomainData(inputArray);
      [this._pitch, this._clarity] = this.pitchDetector.findPitch(inputArray, this._audioSource.audioContext.sampleRate);
      if (this.pitch === 0) {
        Logger.debug("Pitch not detected.", this._pitch, this._clarity);
      }
      this.onListen(this._pitch, this._clarity);
    }
  };
  var MicSource = class {
    constructor() {
      this.audioContext = new AudioContext();
      this.analyserNode = new AnalyserNode(this.audioContext);
    }
    connect() {
      return __async(this, null, function* () {
        let stream;
        try {
          console.log(navigator.mediaDevices);
          stream = yield navigator.mediaDevices.getUserMedia({ audio: true });
        } catch (err) {
          console.log(err);
        }
        this.sourceNode = this.audioContext.createMediaStreamSource(stream);
        this.sourceNode.connect(this.analyserNode);
        yield this.audioContext.resume();
        return this;
      });
    }
  };
  var OscillatorSource = class {
    constructor() {
      this.audioContext = new AudioContext();
      this.analyserNode = new AnalyserNode(this.audioContext);
    }
    connect() {
      return __async(this, null, function* () {
        this.sourceNode = this.audioContext.createOscillator();
        this.sourceNode.type = "sine";
        this.sourceNode.frequency.setValueAtTime(440, this.audioContext.currentTime);
        this.sourceNode.start();
        this.sourceNode.connect(this.analyserNode);
        yield this.audioContext.resume();
        return this;
      });
    }
    set frequency(_frequency) {
      this.sourceNode.frequency.setValueAtTime(_frequency, this.audioContext.currentTime);
    }
  };

  // src/app/utilities/simple-unique-buffer.ts
  var SimpleUniqueBuffer = class {
    constructor(bufferSize) {
      if (bufferSize < 1) {
        throw new RangeError("Buffer size cannot be below zero.");
      }
      this._bufferSize = bufferSize;
      this._buffer = [];
    }
    get average() {
      return this._buffer.reduce((a3, b2) => a3 + b2) / this._buffer.length;
    }
    add(accuracy) {
      if (this._buffer.includes(accuracy)) {
        return;
      }
      this._buffer.push(accuracy);
      if (this._buffer.length === this._bufferSize + 1) {
        this._buffer.shift();
      }
    }
    get bufferSize() {
      return this._bufferSize;
    }
  };

  // src/app/components/tuner/tuner.component.ts
  var TunerComponentStyles = r`
  .tuner-body {
    width: 100vw;
    height: 100vh;
  }
`;
  var TunerComponent = class extends s4 {
    constructor() {
      super(...arguments);
      this.pitchDetectorService = new PitchDetectorService();
      this.accuracyBuffer = new SimpleUniqueBuffer(10);
      this.note = new Note(0);
      this.accuracy = 0;
      this.clarity = 1;
      this.inTune = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.pitchDetectorService.setOnListen((freq, clarity) => {
        this.clarity = clarity;
        if (clarity > 0.98) {
          this.note = NoteUtility.freqToNote(freq);
        } else {
          return;
        }
        const expectedPitch = NoteUtility.noteToPitch(this.note);
        const nextLowestPitch = NoteUtility.noteToPitch(new Note(this.note.index - 1));
        const nextHighestPitch = NoteUtility.noteToPitch(new Note(this.note.index + 1));
        let accuracy;
        if (freq < expectedPitch) {
          this.pitchAccidental = ACCIDENTALS.flat;
          accuracy = MathUtility.map(freq, [nextLowestPitch, expectedPitch], [-1, 1]);
        } else {
          this.pitchAccidental = ACCIDENTALS.sharp;
          accuracy = MathUtility.map(freq, [nextHighestPitch, expectedPitch], [-1, 1]);
        }
        if (accuracy < 0) {
          accuracy = 0;
        }
        this.inTune = accuracy > 0.95;
        this.accuracyBuffer.add(accuracy);
        this.accuracy = MathUtility.round(this.accuracyBuffer.average, 2);
      });
      if (CONFIG.debugMode) {
        this.pitchDetectorService.audioSource = new OscillatorSource();
      }
      this.pitchDetectorService.startListening();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.pitchDetectorService.stopListening();
    }
    updateOscillatorFrequency(inputEvent) {
      const osc = this.pitchDetectorService.audioSource;
      osc.frequency = Number(inputEvent.target.value);
    }
    setPlayback(inputEvent) {
      if (inputEvent.target.checked) {
        this.pitchDetectorService.audioSource.sourceNode.connect(this.pitchDetectorService.audioSource.audioContext.destination);
      } else {
        this.pitchDetectorService.audioSource.sourceNode.disconnect(this.pitchDetectorService.audioSource.audioContext.destination);
      }
    }
    resumeContext() {
      this.pitchDetectorService.audioSource.audioContext.resume().then(() => {
        Logger.debug("Audio source resumed");
      }, (reason) => {
        Logger.error("Audio source failed to resume", reason);
      });
    }
    render() {
      return p`
            ${CONFIG.debugMode ? p`
                        ${this.inTune}
                        ${this.accuracy}
                        <div data-test-id="tuner.debug-info">
                            <input type="range" min="400"
                                   max="1300"
                                   @input="${this.updateOscillatorFrequency}">
                        </div>
                        <div data-test-id="tuner.audio-slider">
                            Audio Playback: <input type="checkbox" @input="${this.setPlayback}">
                        </div>
                    ` : ""}
            <div class="tuner-body" data-test-id="tuner.body" @click="${this.resumeContext}">
                    <!--                <tn-tuner-ring .accuracy="${this.accuracy}
                    " .pitchAccidental="${this.pitchAccidental}"></tn-tuner-ring>-->
                <tn-tuner-note .note="${this.note}" .accuracy="${this.accuracy}"
                               .clarity="${this.clarity}"></tn-tuner-note>
            </div>
        `;
    }
  };
  TunerComponent.styles = TunerComponentStyles;
  __decorateClass([
    e4()
  ], TunerComponent.prototype, "note", 2);
  __decorateClass([
    e4()
  ], TunerComponent.prototype, "accuracy", 2);
  __decorateClass([
    e4()
  ], TunerComponent.prototype, "clarity", 2);
  __decorateClass([
    e4()
  ], TunerComponent.prototype, "pitchAccidental", 2);
  TunerComponent = __decorateClass([
    n5("tn-tuner")
  ], TunerComponent);

  // import-glob:./app/components/**/!(*.spec.ts)
  var modules = [tuner_component_spec_snap_exports, tuner_note_component_exports, tuner_ring_component_exports, tuner_component_exports];
  var spec_default = modules;

  // src/main.ts
  spec_default[0].default;
})();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=main.js.map
