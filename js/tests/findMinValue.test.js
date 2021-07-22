import { findMinValue } from "../main";

describe('findMinValue function', () => {
    let array;

    beforeEach(() => {
        array = [1, 15, 3, 2, 6, 8, 12];
    })

    test('should be defined', () => {
        expect(findMinValue).toBeDefined();
    })

    test('should return min value', () => {
        expect(findMinValue(array)).toBe(1);
    })

    test('should return not undefined', () => {
        expect(findMinValue(array)).not.toBeUndefined()
    })

    test('should return 0', () => {
        expect(findMinValue([])).toBe(0)
    })
})