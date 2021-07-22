import { sortArrayDesc } from "../main";

describe('sortArrayDesk function:', () => {
    let array;
    beforeEach(() => {
        array = [1, 15, 3, 2, 6, 8, 12];
    })
    
    test('should be defined', () => {
        expect(sortArrayDesc).toBeDefined();
    })

    test('should sort array Desc', () => {
        expect(sortArrayDesc(array)).toEqual([15, 12, 8, 6, 3, 2, 1]);
    });
    
    test('should return Array', () => {
        expect(sortArrayDesc(array)).toBeInstanceOf(Array);
    })

    test('should return empty Array', () => {
        expect(sortArrayDesc([])).toEqual([]);
    })

})