import { isPalindrome } from "../main";

describe('isPalindrom function: ', () => {

    test('should be defined', () => {
        expect(isPalindrome).toBeDefined()
    })

    test('should return true', () => {
        expect(isPalindrome('казак')).toBe(true);
    })

    test('should return false', () => {
        expect(isPalindrome('бусел')).toBe(false);
    })

    test('should return false', () => {
        expect(isPalindrome('')).toBe(false);
    })
})