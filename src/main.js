"use strict";
// console.log('Hello world');
Object.defineProperty(exports, "__esModule", { value: true });
var pitch_detector_service_1 = require("./app/pitch-detector.service");
var pitchDetectorService = new pitch_detector_service_1.PitchDetectorService();
var doDraw = true;
document.addEventListener('DOMContentLoaded', function () {
    window.requestAnimationFrame(draw);
    document.getElementById('startListening').addEventListener('click', function () {
        doDraw = true;
        pitchDetectorService.startListening();
    });
    document.getElementById('stopListening').addEventListener('click', function () {
        doDraw = false;
        pitchDetectorService.stopListening();
    });
});
var dots = [];
function draw() {
    if (doDraw) {
        var canvas = document.getElementById('graphPitch');
        var ctx_1 = canvas.getContext('2d');
        ctx_1.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
        ctx_1.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx_1.strokeStyle = 'rgba(0, 153, 255, 0.4)';
        ctx_1.save();
        // create dot
        // if (pitchDetectorService.getClarity() > 0.8) {
        var dotY = map((pitchDetectorService.getPitch() * 10), 0, 20000, canvas.height, 0);
        // console.log(dotY);
        dots.push(new dot(canvas.width, dotY));
        // }
        // iterate through dots
        dots.forEach(function (dot, index) {
            ctx_1.beginPath();
            ctx_1.arc(dot.x, dot.y, 5, 0, 2 * Math.PI);
            ctx_1.stroke();
            dot.x -= 1;
            if (dot.x < 0) {
                dots.slice(index, 1);
            }
        });
    }
    window.requestAnimationFrame(draw);
}
var dot = /** @class */ (function () {
    function dot(x, y) {
        this.x = x;
        this.y = y;
    }
    return dot;
}());
function scaleToCanvas() {
    Math;
}
// @ts-ignore
var map = function (value, x1, y1, x2, y2) { return (value - x1) * (y2 - x2) / (y1 - x1) + x2; };
//
// import {PitchDetector} from "pitchy";
//
// function updatePitch(analyserNode, detector, input, sampleRate) {
//     analyserNode.getFloatTimeDomainData(input);
//     const [pitch, clarity] = detector.findPitch(input, sampleRate);
//     console.log(pitch, clarity)
//     window.setTimeout(
//         () => updatePitch(analyserNode, detector, input, sampleRate),
//         100
//     );
// }
//
// document.addEventListener("DOMContentLoaded", () => {
//     // Note that in some browsers, such as Chrome, this audio context will be
//     // suspended automatically and must be resumed using audioContext.resume()
//     // following a user input on the page (such as a button click). The example
//     // in the examples/simple directory includes a button to do this.
//     const audioContext = new window.AudioContext();
//     const analyserNode = audioContext.createAnalyser();
//
//     navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
//         let sourceNode = audioContext.createMediaStreamSource(stream);
//         sourceNode.connect(analyserNode);
//         const detector = PitchDetector.forFloat32Array(analyserNode.fftSize);
//         const input = new Float32Array(detector.inputLength);
//         updatePitch(analyserNode, detector, input, audioContext.sampleRate);
//     });
// });
/*
*
* import { compile, CircleFactory, hsl, CircleLight } from "sdf-2d";

const main = async () => {
    // Create a new Drawable class
    // This has a fixed color given by the hue-saturation-lightness values,
    // but it could also be changed even during runtime.
    const Circle = CircleFactory(hsl(30, 66, 100));

    // Get a reference to the canvas element on the HTML page
    const canvas = document.querySelector("canvas");

    // Create a renderer and wait for it to compile the required shaders
    const renderer = await compile(canvas, [
        Circle.descriptor,
        CircleLight.descriptor,
    ]);

    // Schedule a new circle to be drawn
    // Objects can be drawn multiple times
    renderer.addDrawable(new Circle([200, 200], 50));

    // Schedule a new light to be drawn
    // An ambient light is always present unless turned of
    renderer.addDrawable(new CircleLight([500, 300], [1, 0.5, 0], 0.5));

    // Up until now, nothing has been draw
    renderer.renderDrawables();
    // The scene is now visible on the canvas
};

main();

*
* */
