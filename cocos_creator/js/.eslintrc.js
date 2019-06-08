module.exports = {
    //lint 環境
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'airbnb-base',
        "plugin:jest/recommended",
    ],
    'parserOptions': {
        'sourceType': 'module'
    },
    'rules': {
        /*
          'off' 或 0 - 关闭规则
          'warn' 或 1 - 开启规则，使用警告级别的错误：warn
          'error' 或 2 - 开启规则，使用错误级别的错误：error
        */
        'indent': [2, 4, {
            'SwitchCase': 1
        }],
        // 強制使用單引號
        'quotes': [2, 'single'],
        // airbnb 不允許使用 console ，這邊打開
        'no-console': 0,
        'class-methods-use-this': 0,
        // allow underscore
        'no-underscore-dangle': 0,
        'no-plusplus': 0,
        'strict': 0,
        'max-len': [2, {
            "code": 140,
            "tabWidth": 4
        }],
        'camelcase': 1,
        'no-unused-vars': 1,
        'no-unused-expressions': [2, {
            'allowShortCircuit': false,
            'allowTernary': true
        }],
        'brace-style': [2, 'stroustrup'],
        'import/no-unresolved': 0,

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
        'import/named': 1,
        'no-param-reassign': 1,
    },
    'globals': {
        'wz3': false,
        'cc': false,
        'Editor': false,
        'jsb': false,
        'CC_EDITOR': false,
        'CC_PREVIEW': false,
        'CC_DEV': false,
        'CC_DEBUG': false,
        'CC_BUILD': false,
        'CC_JSB': false,
        'CC_TEST': false,
    },
    'plugins': ['jest'],
    'overrides': [

        // jest testing file
        {
            'env': {
                'jest': true
            },
            'files': ['test/**/*.js', 'jest/**/*.js'],
            // https://www.npmjs.com/package/eslint-plugin-jest#rules
            'rules': {
                'prefer-arrow-callback': 0,
                'func-names': 0,
                'import/extensions': [0, 'always'],
                'jest/consistent-test-it': [2, {
                    'fn': 'test'
                }],
                'jest/expect-expect': 2,
                'jest/lowercase-name': 2,
            },
            'globals': {
                page: true,
                browser: true,
                context: true,
                jestPuppeteer: true,
                '__require': true,
            }
        }
    ]
};