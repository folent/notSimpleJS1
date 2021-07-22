import { getCountVowels } from "../main";

describe('getCountVowels function: ', () => {
    
    test('should be defined', () => {
        expect(getCountVowels).toBeDefined();
    })

    test('should return vowels count', () =>{
        expect(getCountVowels("sadgfsaaaa")).toBe(5);
    })

    test('should return 0 vowels', () => {
        expect(getCountVowels("")).toBe(0);;
    })
})