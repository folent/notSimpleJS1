import { GetAverage } from "../main";

describe('GetAverage function: ', () => {

    test('should be defined', () => {
        expect(GetAverage).toBeDefined();
    })

    test('should return not NaN', () => {
        expect(GetAverage([])).not.toBeNaN();
    })

    test('should return average value', () => {
        expect(GetAverage([4, 6, 3, 7])).toBe(5);
    })
})