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
    { blankLine: 'always', prev: '*', next: 'break' },
    { blankLine: 'always', prev: '*', next: 'case' },
    { blankLine: 'always', prev: '*', next: 'class' },
    { blankLine: 'always', prev: '*', next: 'continue' },
    { blankLine: 'always', prev: '*', next: 'default' },
    { blankLine: 'always', prev: '*', next: 'do' },
    { blankLine: 'always', prev: '*', next: 'export' },
    { blankLine: 'any', prev: 'export', next: 'export' },
    { blankLine: 'always', prev: '*', next: 'for' },
    { blankLine: 'always', prev: '*', next: 'if' },
    { blankLine: 'always', prev: '*', next: 'return' },
    { blankLine: 'always', prev: '*', next: 'switch' },
    { blankLine: 'always', prev: '*', next: 'throw' },
    { blankLine: 'always', prev: '*', next: 'try' },
    { blankLine: 'always', prev: '*', next: 'while' },
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
