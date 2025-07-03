import stylistic from '@stylistic/eslint-plugin';
import rules from '../rules/stylistic.js';

export default [
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: rules,
  },
];
