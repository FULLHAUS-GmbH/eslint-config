import { Linter } from 'eslint';

declare module 'eslint-config-fullhaus';

declare const _default: {
  /**
   * Collection of configurations that set up all required settings and plugins out of the box
   */
  configs: {
    /**
     * Default configuration which combines these configurations:
     * - {@linkcode baseConfig}
     * - {@linkcode commentsConfig}
     * - {@linkcode stylisticConfig}
     * - {@linkcode typescriptConfig}
     * - {@linkcode unicornConfig}
     */
    default: Linter.Config[];
    /**
     * JavaScript configuration which extends Eslint's recommended rules.
     */
    baseConfig: Linter.Config[];
    /**
     * Configuration for enforced descriptive comments for eslint and TypeScript disables/ignores.
     */
    commentsConfig: Linter.Config[];
    /**
     * Configuration for react (.jsx).
     */
    reactConfig: Linter.Config[];
    /**
     * Configuration for enforced code style.
     */
    stylisticConfig: Linter.Config[];
    /**
     * Configuration for react while using TypeScript (.tsx).
     */
    typedReactConfig: Linter.Config[];
    /**
     * Configuration for TypeScript
     */
    typescriptConfig: Linter.Config[];
    /**
     * Configuration for modern and consistent JavaScript practices
     */
    unicornConfig: Linter.Config[];
  }
  /**
   * Collection of rules used for configuration
   */
  rules: {
    /**
     * Rules for basic ESLint
     * @see https://eslint.org/docs/latest/rules/
     */
    baseRules: Linter.RulesRecord,
    /**
     * Rules for ESLint comments
     * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/
     */
    commentsRules: Linter.RulesRecord,
    /**
     * Rules for ESLint react
     * @see https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#list-of-supported-rules
     */
    reactRules: Linter.RulesRecord,
    /**
     * Rules for ESLint Stylistic
     * @see https://eslint.style/rules
     */
    stylisticRules: Linter.RulesRecord,
    /**
     * TypeScript (`.tsx`) adjusted rules for ESLint react
     * @see https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#list-of-supported-rules
     * @see https://typescript-eslint.io/rules/
     */
    typedReactRules: Linter.RulesRecord,
    /**
     * Rules for typescript-eslint
     * @see https://typescript-eslint.io/rules/
     */
    typescriptRules: Linter.RulesRecord,
    /**
     * Rules for eslint-plugin-unicorn
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn/tree/main?tab=readme-ov-file#rules
     */
    unicornRules: Linter.RulesRecord,
  };
}

export default _default;
