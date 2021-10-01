// console.log('Hello world');

import {PitchDetectorService} from "./app/pitch-detector.service";

let pitchDetectorService = new PitchDetectorService();

document.addEventListener('DOMContentLoaded', () => {

    pitchDetectorService.connectToStream().then(() => {
        console.log("Connected to microphone");
        // start the pitch detector
        pitchDetectorService.start();
    });

    window.requestAnimationFrame(draw);
    // document.getElementById('getPitch').addEventListener('click', () => {
    //     document.getElementById('showPitch').innerText = 'pitch: ' + pitchDetectorService.getPitch();
    // });
});

const dots = [];

function draw() {
    let canvas = document.getElementById('graphPitch') as HTMLCanvasElement;
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    ctx.save();

    // create dot
    // if (pitchDetectorService.getClarity() > 0.8) {
        dots.push(new dot(canvas.width, map(pitchDetectorService.getPitch(), 0, 2000, canvas.height, 0) ));
    // }

    // iterate through dots

    dots.forEach((dot, index) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 5, 0, 2 * Math.PI);
        ctx.stroke();
        dot.x -= 1;
        if (dot.x < 0) {
            dots.slice(index, 1);
        }
    })

    //
    window.requestAnimationFrame(draw);
}

class dot {

    private x: number;
    private y: number;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function scaleToCanvas() {
    Math
}

// @ts-ignore
const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

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
