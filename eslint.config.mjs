import google from 'eslint-config-google';
import js from '@eslint/js';
import globals from 'globals';

const googleRules = { ...google.rules };
delete googleRules['valid-jsdoc'];
delete googleRules['require-jsdoc'];

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...googleRules,
      'no-var': 'off',
      'camelcase': 'off',
      'max-len': ['warn', { 'code': 200 }], 
      'no-unused-vars': 'warn',
      'no-useless-assignment': 'warn',
      'semi': ['error', 'always'],
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**', 'tests/**'],
  },
];