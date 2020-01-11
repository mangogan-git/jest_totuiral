module.exports = {
    // plugins: ['./babel_plugin/babel-cc-class.js'],
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
            '@babel/preset-typescript',
        ],
    ],
    ignore: [
        '**/cocos2d-js-for-preview.js',
    ],
};
