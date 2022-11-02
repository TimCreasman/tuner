export class SimpleBuffer {

    private readonly _bufferSize: number;
    private accuracyBuffer: number[];

    constructor(bufferSize: number) {
        this._bufferSize = bufferSize;
        this.accuracyBuffer = [this._bufferSize];
    }

    public get average() {
        return this.accuracyBuffer.reduce((a, b) => a + b) / this.accuracyBuffer.length;
    }

    public add(accuracy: number) {
        this.accuracyBuffer.push(accuracy);
        if (this.accuracyBuffer.length === this._bufferSize) {
            this.accuracyBuffer.shift();
        }
    }

}
