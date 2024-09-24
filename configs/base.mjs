import stylistic from '@stylistic/eslint-plugin';
import eslintJs from '@eslint/js';
import rules from '../rules/base.js';

export default [
  eslintJs.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: rules,
  },
];
