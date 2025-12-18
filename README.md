# FULLHAUS ESLint configuration

This repository contains the ESLint configuration used for projects maintained by [**FULL**HAUS](https://www.fullhaus.de/). It provides
a comprehensive set of ESLint rules configurations for modern flat setups (ESLint v9+).

## Installation

You can install the **FULL**HAUS ESLint configuration using a package manager of your choice:
```shell
pnpm add @fullhaus/eslint-config --save-dev
```

## Usage

### Flat config

For projects using the [flat configuration](https://eslint.org/docs/latest/use/configure/configuration-files), you can use following setup:

```js
import fhEslint from '@fullhaus/eslint-config';

export default [
  ...fhEslint.configs.default,
];
```

> [!WARNING]
> The TypeScript config includes the [`prefer-nullish-coalescing`](https://typescript-eslint.io/rules/prefer-nullish-coalescing) rule which requires [`strictNullChecks`](https://www.typescriptlang.org/tsconfig#strictNullChecks) to be enabled in your `tsconfig.json`

### Legacy config

This package no longer supports legacy ESLint (v8) configurations. If you still rely on the legacy setup, you can use [`@fullhaus/eslint-config@0.1.1`](https://github.com/FULLHAUS-GmbH/eslint-config/tree/v0.1.1), but note that its rules are no longer maintained or up to date.

### Custom Configurations

In case your project requires specific configurations (for example, a JavaScript-only codebase or just stylistic rules), you can selectively extend the configurations you need.

```js
import fhEslint from '@fullhaus/eslint-config';

export default [
  ...fhEslint.configs.baseConfig, // js only
  ...fhEslint.configs.stylisticConfig, // stylistic only
];
```

### React

For React projects, you can extend your ESLint configuration with React-specific rules.

```js
import fhEslint from '@fullhaus/eslint-config';

export default [
  ...fhEslint.configs.default,
  ...fhEslint.configs.reactConfig,
  // or when using React with TypeScript (.tsx):
  ...fhEslint.configs.typedReactConfig,
];
```

### Frameworks
Frameworks (like Next.js) come with their own ESLint configuration, which can lead to plugin conflicts. To prevent these issues, our configuration provides all necessary rules. Here’s an example setup for a Next.js project:

```js
// example using next.js
import fhEslint from '@fullhaus/eslint-config';

export default [
  ...compat.extends('next/core-web-vitals'),
  ...fhEslint.configs.default,
  {
    rules: fhEslint.rules.typedReactRules,
  },
];
```
> [!NOTE]
> Adjust the usage of `compat.extends` as required by your project’s setup.

## Available Configurations and Rules
The **FULL**HAUS ESLint Configuration package provides a modular set of configurations and rules designed to accommodate different project needs. Below is a list of the available options:

### Configurations
| Config             | Description                                 |
|--------------------|---------------------------------------------|
| `default`          | The full recommended configuration          |
| `baseConfig`       | JavaScript-focused configuration            |
| `stylisticConfig`  | Stylistic rules for code consistency        |
| `reactConfig`      | Contains React-specific ESLint rules        |
| `typedReactConfig` | React configuration for TypeScript projects |
| `typescriptConfig` | TypeScript-focused configuration            |
| `unicornConfig`    | Opinionated JS code style configuration     |
| `importConfig`     | Configuration for best practice imports     |

### Rules
| Rule Name         | Description                      |
|-------------------|----------------------------------|
| `baseRules`       | Rules for JavaScript             |
| `commentsRules`   | Rules for ESLint comments        |
| `reactRules`      | Rules for React                  |
| `stylisticRules`  | Rules for code styling           |
| `typedReactRules` | Rules for React using TypeScript |
| `typescriptRules` | Rules for TypeScript             |
| `unicornRules`    | Rules for extended code styles   |
| `importRules`     | Rules for best practice imports  |

Feel free to mix and match these configurations and rules to best suit your project’s requirements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
