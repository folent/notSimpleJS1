import { getMonthName } from "../main";

describe('getMonthName function: ', () => {

    test('should be defined', () => {
        expect(getMonthName).toBeDefined();
    })

    test('should return "Весна"', () => {
        expect(getMonthName(3)).toBe('Весна');
    })

    test('should return "Лето"', () => {
        expect(getMonthName(8)).toBe('Лето');
    })

    test('should return "Осень"', () => {
        expect(getMonthName(11)).toBe('Осень');
    })

    test('should return "Зима"', () => {
        expect(getMonthName(12)).toBe('Зима');
    })

    test('should return "Такого времени года не существует!"', () => {
        expect(getMonthName(13)).toBe('Такого времени года не существует!');
    })
})