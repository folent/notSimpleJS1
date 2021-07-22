import { getDecadeNumber } from "../main"

describe('getDecadeNumber function: ', () => {

    test('should be defined', () => {
        expect(getDecadeNumber).toBeDefined();
    })

    test('should return "Первая декада месяца"', () => {
        expect(getDecadeNumber(5)).toBe('Первая декада месяца');
    })

    test('should return "Вторая декада месяца"', () => {
        expect(getDecadeNumber(15)).toBe('Вторая декада месяца');
    })

    test('should return "Третья декада месяца"', () => {
        expect(getDecadeNumber(25)).toBe('Третья декада месяца');
    })

    test('should return "Такой декады не существует!"', () => {
        expect(getDecadeNumber(32)).toBe('Такой декады не существует!');
    })
})