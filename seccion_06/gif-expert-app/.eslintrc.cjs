module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    "ecmaVersion": 2018,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
    "require-jsdoc": "off",
    "linebreak-style": ["error", "windows"],
    "indent": "off",
    "new-cap": "off",
    "object-curly-spacing": "off",
    "max-len": ["error", { "code": 500 }],
    "no-unused-vars": "off",
    "padded-blocks": "off",
    "no-trailing-spaces": "off",
    "prefer-const": "off",
    "space-before-function-paren": "off",
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
};
