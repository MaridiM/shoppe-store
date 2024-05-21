module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react-refresh',
    // '@typescript-eslint',
    'import',
    'prettier'
  ],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // General rules
    eqeqeq: 'warn',
    'no-var': 'error',
    'no-eval': 'error',
    'prefer-const': 'warn',
    'no-undef-init': 'warn',
    'no-duplicate-imports': 'warn',
    
    // React rules
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/prop-types': 'off',
    'react/jsx-key': ['warn', { checkFragmentShorthand: false }],
    'react/no-unescaped-entities': ['warn', { forbid: ['>', '}', "'"] }],
    'react/no-deprecated': 'warn',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    'react/self-closing-comp': ['error', { component: false, html: true }],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    
    // // TypeScript rules
    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-unused-vars': 'warn',
    // '@typescript-eslint/await-thenable': 'warn',
    // '@typescript-eslint/no-shadow': 'error',
    // '@typescript-eslint/no-duplicate-enum-values': 'warn',
    // '@typescript-eslint/no-use-before-define': 'error',
    // '@typescript-eslint/array-type': 'error',
    
    // Additional rules
    indent: ['error', 4],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'arrow-body-style': ['error', 'as-needed'],
    
    // Import rules
    'import/order': [
        'error',
        {
            groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
            pathGroups: [
                {
                    pattern: '**/**',
                    group: 'parent',
                    position: 'before',
                },
            ],
            alphabetize: { order: 'asc' },
        },
    ],
    'prettier/prettier': [
        'warn',
        {
            endOfLine: 'auto',
        },
    ],
  },
  overrides: [
      {
          files: ['*.js', '*.jsx'],
          rules: {
              'no-undef': 'off',
          },
      },
  ],
}
