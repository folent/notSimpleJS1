import { GetReverseArray } from "../main";

describe('GetReverseArray function: ', () => {
    
    test('should be defined', () => {
        expect(GetReverseArray).toBeDefined();
    })

    test('should return reversed array', () => {
        expect(GetReverseArray([3, 4, 5, 6, 7, 8])).toEqual([8, 7, 6, 5, 4, 3]);
    })

    test('should return array', () => {
        expect(GetReverseArray([3, 4, 5, 6, 7, 8])).toBeInstanceOf(Array);
    })

    test('should return empty array', () => {
        expect(GetReverseArray([])).toEqual([]);
    })
})