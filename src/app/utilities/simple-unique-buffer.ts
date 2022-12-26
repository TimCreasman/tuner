export class SimpleUniqueBuffer {

    private readonly _bufferSize: number;
    private _buffer: number[];

    constructor(bufferSize: number) {
        if (bufferSize < 1) {
            throw new RangeError('Buffer size cannot be below zero.');
        }
        this._bufferSize = bufferSize;
        this._buffer = [];
    }

    public get average(): number {
        return this._buffer.reduce((a, b) => a + b) / this._buffer.length;
    }

    public add(accuracy: number): void {
        // Ignore repeated values:
        if (this._buffer.includes(accuracy)) {
            return;
        }
        this._buffer.push(accuracy);
        if (this._buffer.length === (this._bufferSize + 1)) {
            this._buffer.shift();
        }
    }

    public get bufferSize(): number {
        return this._bufferSize;
    }
}
