import { transformString } from "../main";

describe('transformString function: ', () => {

    test('should be defined', () => {
        expect(transformString).toBeDefined();
    })

    test('should transformed string', () => {
        expect(transformString('123456')).toBe('214365');
    })

    test('should return empty string', () => {
        expect(transformString('')).toBe('');
    })
})