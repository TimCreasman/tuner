export class MathUtility {
    public static map = (value: number, x1: number, y1: number, x2: number, y2: number) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;
    public static clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);
}
