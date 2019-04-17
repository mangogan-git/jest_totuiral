describe('toBe', () => {
    test('two plus two is four', () => {
        expect(2 + 2).toBe(4);
    });

    test('typeof string', () => {
        expect(add(3,3)).toBe(6);
    });

    test('2 not equal 3', () => {
        expect(2).not.toBe(3);
    });

    test('fail to check object', () => {
        expect({}).toBe({});
    });
});