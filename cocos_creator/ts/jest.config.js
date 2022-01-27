module.exports = {
    preset: 'ts-jest',
    collectCoverageFrom: ['<rootDir>/assets/**/*.ts'],
    setupFiles: [
        'jest-canvas-mock', // npm 套件只需要名稱
        '<rootDir>/test/utils/cocos2d-js-for-preview.js',
    ],
    testEnvironment: 'jsdom',
    transformIgnorePatterns: [
        'cocos2d-js-for-preview.js',
    ],
};
