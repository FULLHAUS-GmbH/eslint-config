export default {
  // ESLint Stylistic rules - https://eslint.style/rules
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/comma-spacing': 'error',
  '@stylistic/comma-style': 'error',
  '@stylistic/eol-last': 'error',
  '@stylistic/indent': [
    'error',
    2,
  ],
  '@stylistic/no-trailing-spaces': 'error',
  '@stylistic/no-multi-spaces': 'error',
  '@stylistic/no-floating-decimal': 'error',
  '@stylistic/padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: '*',
      next: [
        'switch',
        'case',
        'break',
        'class',
        'do',
        'for',
        'continue',
        'default',
        'export',
        'if',
        'return',
        'throw',
        'try',
        'while',
      ],
    },
    { blankLine: 'always', prev: 'export', next: '*' },
    { blankLine: 'any', prev: 'export', next: 'export' },
    {
      blankLine: 'always',
      prev: ['const', 'let', 'var'],
      next: '*',
    },
    {
      blankLine: 'any',
      prev: ['const', 'let', 'var'],
      next: ['const', 'let', 'var'],
    },
  ],
  '@stylistic/quotes': [
    'error',
    'single',
    {
      'avoidEscape': true,
    },
  ],
  '@stylistic/semi': 'error',
  '@stylistic/space-before-blocks': 'error',
  '@stylistic/space-before-function-paren': [
    'error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always',
    },
  ],
};
