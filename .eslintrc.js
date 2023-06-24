module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb", "plugin:i18next/recommended",
    "plugin:storybook/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "i18next", "react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    quotes: [1, "double"],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    indent: [2, 2],
    "react/jsx-filename-extension": [2, {
      extensions: [".js", ".jsx", ".tsx"]
    }],
    "comma-dangle": "off",
    "react/destructuring-assignment": [
      1,
      "always",
      { ignoreClassFields: true, destructureInSignature: "ignore" }
    ],
    "operator-linebreak": [1, "after"],
    "no-restricted-exports": "off",
    "react/button-has-type": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/no-static-element-interactions": 1,
    "jsx-a11y/click-events-have-key-events": 1,
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": [1, {
      markupOnly: true,
      ignoreAttribute: ["to"]
    }],
    "object-curly-newline": [
      1,
      { multiline: true, minProperties: 3 }
    ],
    "max-len": ["error", { ignoreComments: true, code: 120 }]
  },
  globals: {
    __IS_DEV__: true
  },
  overrides: [{
    files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
    rules: {
      "i18next/no-literal-string": "off",
      "max-len": "off"
    }
  }]
};
