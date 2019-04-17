
describe('async/await', () => {
    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('peanut butter');
            }, 1000);
        });
    }

    test('the data is peanut butter', async () => {
        expect.assertions(1);
        const data = await fetchData();
        expect(data).toBe('peanut butter');
    });
});

describe('async/await with error', () => {
    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('peanut butter not enough');
            }, 1000);
        });
    }

    test('fetch fails with an error', async () => {
        expect.assertions(1);
        try {
            await fetchData();
        } catch (e) {
            expect(e).toMatch('not enough');
        }
    });
});


