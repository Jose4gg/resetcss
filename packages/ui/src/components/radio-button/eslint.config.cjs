const eslintConfigReact = require('@nayya-com/eslint-config/react');

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config[]} */
module.exports = [
  ...eslintConfigReact,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
  },
  {
    ignores: [
      'eslint.config.cjs',
      'rollup.config.mjs',
      'lib',
      'lib/*',
      'lib/**/*',
      'src/tests/**/*.{js,jsx,ts,tsx}',
    ],
  },
];
