import { isAnagram } from "../main";

describe('isAnagram function', () => {

    test('should be defined', () => {
        expect(isAnagram).toBeDefined();
    })

    test('should return true', () => {
        expect(isAnagram('Rat.. !', 'ta!! r!?')).toBe(true);
    })

    test('should return false', () => {
        expect(isAnagram('sat.. !', 'ra!! r!?')).toBe(false);
    })
    
    test('should return false', () => {
        expect(isAnagram('', '')).toBe(false);
    })
})