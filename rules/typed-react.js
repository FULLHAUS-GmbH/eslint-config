import baseReactRules from '../rules/react.js';

export default {
  ...baseReactRules,

  // Overrides
  '@typescript-eslint/no-misused-promises': [
    2,
    {
      'checksVoidReturn': {
        'attributes': false,
      },
    },
  ],
};
