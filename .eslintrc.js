module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb-base", "airbnb-typescript/base", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 12,
  },
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["/.eslintrc.js", "/*.conf.js", "src/polyfills.ts"],
  rules: {
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "consistent-return": "off",
    "no-console": "off",
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "@typescript-eslint/no-useless-constructor": "off",
    "@typescript-eslint/no-empty-function": "off",
  },
};
