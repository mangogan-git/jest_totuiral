import { JestEnvironment } from '@jest/environment';

describe('timeout', () => {
    function fn() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('end');
            }, 6000);
        });
    }

    test('case1', async() => {
        const data = await fn();
        expect(data).toBe('end');
    })
});

describe('allow timeout', () => {
    function fn() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('end');
            }, 6000);
        });
    }

    test('case1', async () => {
        const data = await fn();
        expect(data).toBe('end');
    }, 10000);
});

describe('set jest timeout', () => {
    beforeAll(() => {
        jest.setTimeout(10000);
    });

    function fn() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('end');
            }, 6000);
        });
    }

    test('case1', async () => {
        const data = await fn();
        expect(data).toBe('end');
    });
});