import add from '../src/add';

describe('testing my function', () => {
    test('2+3', () => {
        expect(add(2, 3)).toBe(5);
    });

    it('3+3', () => {
        expect(add(3,3)).toBe(6);
    });

    test('test case fail', () => {
        expect(add(1,  1)).toBe(7);
    });
});
