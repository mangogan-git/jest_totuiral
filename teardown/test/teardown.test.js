import {
    exportAllDeclaration
} from '@babel/types';

describe('beforeEach', () => {
    const data = {};
    beforeEach(() => {
        data.describe = 'beforeEach';
    });

    afterEach(() => {
        console.log('afterEach, data.describe = %s', data.describe);
    });
    test('test 1', () => {
        console.log('test1 data: %s', data.describe);
    });

    test('test 2', () => {
        console.log('test2 data: %s', data.describe);
        data.describe = 'change from test2';
    });
});

describe('promise setup', () => {
    const data = {};
    beforeAll(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                data.describe = 'async setup';
                resolve();
            }, 1000);
        });
    });

    test('test 1', () => {
        expect(data.describe).toBe('async setup');
    });

});

describe('async setup', () => {
    const data = {};
    beforeAll(async () => {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                data.describe = 'async setup';
                resolve();
            }, 1000);
        });
    });

    test('test 1', () => {
        expect(data.describe).toBe('async setup');
    });

});