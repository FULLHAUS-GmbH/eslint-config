import stylistic from '@stylistic/eslint-plugin';
import eslintJs from '@eslint/js';
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import rules from '../rules/base.js';

export default [
  eslintJs.configs.recommended,
  eslintComments.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: rules,
  },
];
