import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import rules from '../rules/unicorn.js';

export default [
  {
    plugins: {
      'unicorn': eslintPluginUnicorn,
    },
    rules: rules,
  },
];
