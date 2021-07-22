import { sortArrayAsc } from '../main'
describe('Sort Array Asc function:', () => {
  let array;

  beforeEach(() => {
    array = [1, 15, 3, 2, 6, 8, 12];
  })

  test('should be defined', () => {
    expect(sortArrayAsc).toBeDefined();
  })

  test('should sort array Asc', () => {
    expect(sortArrayAsc(array)).toEqual([1, 2, 3, 6, 8, 12, 15]);
  });

  test('should return Array', () => {
    expect(sortArrayAsc(array)).toBeInstanceOf(Array);
  })

  test('should return empty Array', () => {
    expect(sortArrayAsc([])).toEqual([]);
})
})