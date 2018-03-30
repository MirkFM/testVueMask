"use strict";

module.exports = {
    root: true,
    env: {
        es6: true,
        node: true
    },
    plugins: ["security", "prettier"],
    extends: ["plugin:security/recommended", "eslint:recommended"],
    parserOptions: {
        ecmaVersion: 6
    },
    rules: {
        "linebreak-style": [2, "windows"],
        indent: [2, 4],
        quotes: [2, "double"],
        "quote-props": [2, "always"],
        "max-len": [
            2,
            {
                code: 140
            }
        ],
        "no-magic-numbers": [
            2,
            {
                ignore: [-1, 0, 1]
            }
        ],
        strict: 2,
        "object-curly-spacing": [2, "always"],
        "operator-linebreak": [2, "before"],
        "object-shorthand": [2, "never"]
    }
};
