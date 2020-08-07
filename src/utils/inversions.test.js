import { inversions } from './inversions'

test('check inversions with asc numbers', () => expect(inversions([0, 1, 2, 3])).toBe(0))
test('check inversions with desc numbers', () => expect(inversions([3, 2, 1, 0])).toBe(6))
test('check inversions with asc strings', () => expect(inversions(['a', 'b', 'c', 'd'])).toBe(0))
test('check inversions with desc strings', () => expect(inversions(['d', 'c', 'b', 'a'])).toBe(6))
