module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/prettier'],
    rules: {
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'prettier/prettier': [
            'warn',
            {
                singleQuote: true,
                trailingComma: 'none',
                endOfLine: 'auto',
                tabWidth: 4,
                vueIndentScriptAndStyle: true
            }
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)'],
            env: { jest: true }
        }
    ]
};
