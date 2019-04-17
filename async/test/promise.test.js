describe('promise resolve', () => {
    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('peanut butter');
            }, 1000);
        });
    }

    test('the data is peanut butter', () => {
        return fetchData().then(data => {
            expect(data).toBe('peanut butter');
        });
    });
});

describe('promise reject', () => {
    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('peanut butter not enough');
            }, 1000);
        });
    }

    test('the data is peanut butter', () => {
        expect.assertions(1);
        return fetchData().catch(e =>
            expect(e).toMatch('peanut butter not enough')
        );
    });
});