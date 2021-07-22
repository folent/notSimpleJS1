import { findMaxValue } from "../main";

describe('FindMaxValue function: ', () => {
    let array;
    beforeEach(() => {
        array = [1, 15, 3, 2, 6, 8, 12];
    })

    test('should be defined', () => {
        expect(findMaxValue(array)).toBeDefined();
    })

    test('should return max value', () => {
        expect(findMaxValue(array)).toBe(15);
    });

    test('should return not undefined', () => {
        expect(findMaxValue(array)).not.toBeUndefined()
    })

    test('should return 0', () => {
        expect(findMaxValue([])).toBe(0)
    })
})