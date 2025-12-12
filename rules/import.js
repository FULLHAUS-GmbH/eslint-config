export default {
  // ESLint import rules - https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#rules
  'import/enforce-node-protocol-usage': ['error', 'always'],
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': 'error',
  'import/no-empty-named-blocks': 'error',
  'import/no-mutable-exports': 'error',
  'import/no-unresolved': 'off',
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'type'],
      'newlines-between': 'never',
    },
  ],
};
