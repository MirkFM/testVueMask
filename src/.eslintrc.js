"use strict";

module.exports = {
    root: true,
    env: {
        jquery: true,
        browser: true,
        es6: true
    },
    parser: "typescript-eslint-parser",
    plugins: ["security", "prettier"],
    extends: ["plugin:security/recommended", "eslint:recommended"],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            modules: true
        }
    },
    rules: {
        "linebreak-style": [2, "windows"],
        indent: [2, 4],
        quotes: [2, "double"],
        "max-len": [
            2,
            {
                code: 140,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true
            }
        ],
        "no-magic-numbers": [
            2,
            {
                ignore: [-1, 0, 1]
            }
        ],
        "no-template-curly-in-string": 2,
        "accessor-pairs": 2,
        "array-callback-return": 2,
        "block-scoped-var": 2,
        "class-methods-use-this": 2,
        "consistent-return": 2,
        curly: [2, "all"],
        "default-case": 2,
        "dot-notation": 2,
        eqeqeq: 2,
        "guard-for-in": 2,
        "no-alert": 2,
        "no-caller": 2,
        "no-div-regex": 2,
        "no-else-return": 2,
        "no-empty-function": 2,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-label": 2,
        "no-floating-decimal": 2,
        "no-implicit-coercion": [2, { allow: ["~"] }],
        "no-implicit-globals": 2,
        "no-implied-eval": 2,
        "no-invalid-this": 2,
        "no-iterator": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-octal-escape": 2,
        "no-param-reassign": 2,
        "no-proto": 2,
        "no-return-assign": 2,
        "no-return-await": 2,
        "no-script-url": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unmodified-loop-condition": 2,
        "no-unused-expressions": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-useless-return": 2,
        "no-void": 2,
        "no-with": 2,
        radix: 2,
        "require-await": 2,
        "vars-on-top": 2,
        "wrap-iife": [2, "inside"],
        yoda: [2, "never", { exceptRange: true }],
        "no-catch-shadow": 2,
        "no-label-var": 2,
        "no-shadow": 2,
        "no-shadow-restricted-names": 2,
        "no-undef-init": 2,
        "no-undefined": 2,
        "no-use-before-define": ["error", { variables: false }],
        "prefer-promise-reject-errors": 2,

        "array-bracket-spacing": 2,
        "block-spacing": 2,
        "brace-style": [2, "1tbs"],
        "comma-dangle": [2, "never"],
        "comma-spacing": [2, { before: false, after: true }],
        "comma-style": [2, "last"],
        "computed-property-spacing": [2, "never"],
        "eol-last": [2, "always"],
        "func-call-spacing": [2, "never"],
        "func-name-matching": [2, { includeCommonJSModuleExports: true }],
        "func-names": [2, "as-needed"],
        "function-paren-newline": [2, "never"],
        "id-blacklist": [2, "data", "err", "e", "cb", "callback"],
        "implicit-arrow-linebreak": [2, "beside"],
        "jsx-quotes": [2, "prefer-double"],
        "key-spacing": [2, { align: "colon" }],
        "lines-between-class-members": [2, "always"],
        "max-depth": [2, 4],
        "max-params": [2, 3],
        "multiline-comment-style": [2, "starred-block"],
        "new-cap": 2,
        "new-parens": 2,
        "no-array-constructor": 2,
        "no-bitwise": [2, { allow: ["~"] }],
        "no-lonely-if": 2,
        "no-mixed-operators": [
            2,
            {
                groups: [
                    ["+", "-", "*", "/", "**", "%"],
                    ["&", "|", "^", "~", "<<", ">>", ">>>"],
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"]
                ],
                allowSamePrecedence: true
            }
        ],

        "no-multi-assign": 2,
        "no-multiple-empty-lines": 2,
        "no-negated-condition": 2,
        "no-new-object": 2,
        "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
        "no-tabs": 2,
        "no-trailing-spaces": 2,
        "no-underscore-dangle": 2,
        "no-unneeded-ternary": 2,
        "no-whitespace-before-property": 2,
        "object-curly-newline": [2, { minProperties: 2 }],
        "object-curly-spacing": [2, "always"],
        "object-property-newline": 2,
        "one-var": 2,
        "one-var-declaration-per-line": [2, "initializations"],
        "operator-assignment": [2, "never"],
        "operator-linebreak": [2, "before"],
        "padded-blocks": [2, "never"],
        "padding-line-between-statements": [
            2,
            { blankLine: "always", prev: "*", next: "return" },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
            {
                blankLine: "any",
                prev: ["const", "let", "var"],
                next: ["const", "let", "var"]
            },
            { blankLine: "always", prev: "directive", next: "*" },
            { blankLine: "any", prev: "directive", next: "directive" }
        ],
        "quote-props": [2, "always"],
        "require-jsdoc": [
            2,
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: false,
                    ClassDeclaration: false,
                    ArrowFunctionExpression: false,
                    FunctionExpression: false
                }
            }
        ],
        semi: [2, "always"],
        "semi-spacing": 2,
        "semi-style": [2, "last"],
        "space-before-blocks": 2,
        "space-before-function-paren": [2, "always"],
        "space-in-parens": [2, "never", { exceptions: ["()"] }],
        "space-infix-ops": 2,
        "space-unary-ops": [2, { words: true, nonwords: false }],
        "template-tag-spacing": [2, "never"],
        "unicode-bom": [2, "never"],
        "arrow-body-style": [2, "always"],
        "arrow-parens": [2, "always"],
        "arrow-spacing": [2, { before: true, after: true }],
        "constructor-super": 2,
        "generator-star-spacing": [2, { before: true, after: true }],
        "no-class-assign": 2,
        "no-confusing-arrow": 2,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-new-symbol": 2,
        "no-this-before-super": 2,
        "no-var": 2,
        "no-useless-constructor": 2,
        "object-shorthand": [2, "never"],
        "prefer-arrow-callback": 2,
        "prefer-const": 2,
        "prefer-reflect": [2, { exceptions: ["getOwnPropertyDescriptor"] }],
        "prefer-rest-params": 2,
        "prefer-spread": 2,
        "prefer-template": 2,
        "require-yield": 2,
        "template-curly-spacing": [2, "never"],
        "yield-star-spacing": [2, "both"]
    }
};
