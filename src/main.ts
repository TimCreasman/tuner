import {PitchDetectorService} from "./app/pitch-detector.service";
import {NotationUtility} from "./app/notation-utility";

import './assets/css/main.css';

let pitchDetectorService = new PitchDetectorService();
let doDraw = true;

const CLARITY_THRESHOLD = 0.6;

document.addEventListener('DOMContentLoaded', () => {
    // window.requestAnimationFrame(draw);

    const noteLetter = document.getElementsByClassName('letter')[0];
    const noteAccidental = document.getElementsByClassName('accidental')[0];

    pitchDetectorService.setOnListen((pitch, clarity) => {
        console.info( 'Pitch: ' + pitch + ', Clarity: ' + clarity);
        if (clarity > CLARITY_THRESHOLD) {
            noteLetter.innerHTML = NotationUtility.hzToNoteName(pitch);
        } else {
            noteLetter.innerHTML = '?';
        }
    });

    document.getElementById('startListening').addEventListener('click', () => {
        doDraw = true;
        pitchDetectorService.startListening();
    });

    document.getElementById('stopListening').addEventListener('click', () => {
        doDraw = false;
        pitchDetectorService.stopListening();
    });
});

const dots: Dot[] = [];

function draw() {

    if (doDraw) {
        let canvas = document.getElementById('graphPitch') as HTMLCanvasElement;
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
        ctx.save();

        // create dot
        const dotY = map((pitchDetectorService.getPitch()*10), 0, 20000, canvas.height, 0);
        dots.push(new Dot(canvas.width, dotY));

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
    }

    window.requestAnimationFrame(draw);
}

class Dot {

    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

// @ts-ignore
const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;
