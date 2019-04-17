module.exports = {
    plugins: ['./babel_plugin/babel-cc-class.js'],
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
    ignore: [
        '**/cocos2d-js-for-preview.js',
    ],
};
