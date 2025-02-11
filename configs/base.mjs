import eslintJs from '@eslint/js';
import rules from '../rules/base.js';

export default [
  eslintJs.configs.recommended,
  {
    rules: rules,
  },
];
