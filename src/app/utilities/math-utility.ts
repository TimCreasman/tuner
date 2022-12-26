export class MathUtility {
    /**
     * Maps a provided value to another specified range.
     * @param value The value being mapped.
     * @param range1 The range the current value is expected to be mapped to.
     * @param range2 The new range to map the value to.
     */
    public static map = (value: number, range1: [number, number], range2: [number, number]) => (value - range1[0]) * (range2[1] - range2[0]) / (range1[1] - range1[0]) + range2[0];

    /**
     * Force a number into a specified range.
     * @param value The number to
     * @param range
     */
    public static clamp = (value: number, range: [number, number]) => Math.min(Math.max(value, range[0]), range[1]);

    /**
     * Rounds a number to the specified decimal.
     * @param value The number to round.
     * @param decimals The number of decimals to round to.
     */
    public static round = (value: number, decimals: number) => Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
}
