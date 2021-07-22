import { inArray } from "../main";

describe('inArray function: ', () => {

    test('should be defined', () => {
        expect(inArray).toBeDefined();
    })

    test('should return true', () => {
        expect(inArray('abC', ['ss', 'sb', 'dsds', 'abC'])).toBe(true);
    })

    test('should return false', () => {
        expect(inArray('', [])).toBe(false);
    })

    test('should return false', () => {
        expect(inArray('asd', [])).toBe(false);
    })

    test('should return false', () => {
        expect(inArray('', ['asd'])).toBe(false);
    })
})