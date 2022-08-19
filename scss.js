module.exports = {
  customSyntax: 'postcss-scss',
  plugins: ['stylelint-scss'],
  rules: {
    /**
     * Disable rules that conflict with Prettier.
     */
    'scss/at-else-closing-brace-newline-after': null,
    'scss/at-else-closing-brace-space-after': null,
    'scss/at-else-empty-line-before': null,
    'scss/at-else-if-parentheses-space-before': null,
    'scss/at-function-parentheses-space-before': null,
    'scss/at-if-closing-brace-newline-after': null,
    'scss/at-if-closing-brace-space-after': null,

    /**
     * Disable rules for which an extension rule exists.
     */
    'at-rule-no-unknown': null,

    /**
     * Disallow at-extends (`@extend`) with missing placeholders.
     * https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md
     */
    'scss/at-extend-no-missing-placeholder': true,

    /**
     * Require named parameters in SCSS function call rule.
     * https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-function-named-arguments/README.md
     */
    'scss/at-function-named-arguments': null,

    /**
     * Specify a pattern for Sass/SCSS-like function names.
     * https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-function-pattern/README.md
     */
    'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

    /**
     * Disallow `null` in `@if` statements.
     * https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-if-no-null/README.md
     */
    'scss/at-if-no-null': true,

    /**
     * Disallow leading underscore in partial names in `@import`.
     * https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-no-partial-leading-underscore/README.md
     */
    'scss/at-import-no-partial-leading-underscore': true,

    /**
     * Require or disallow extension in `@import` commands.
     * https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-partial-extension/README.md
     */
    'scss/at-import-partial-extension': null,

    /**
     * Specify blacklist of disallowed file extensions for partial names in `@import` commands.
     * https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-partial-extension-blacklist/README.md
     */
    'scss/at-import-partial-extension-blacklist': ['scss'],

    /**
     * Specify whitelist of allowed file extensions for partial names in `@import` commands.
     * https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-partial-extension-whitelist/README.md
     */
    'scss/at-import-partial-extension-whitelist': null,

    /**
     * Specify a pattern for Sass/SCSS-like mixin names.
     * https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-pattern/README.md
     */
    'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

    /**
     * Disallow unknown at-rules.
     * https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md
     */
    'scss/at-rule-no-unknown': true,

    /**
     * Specify a pattern for Sass-like variables.
     * https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-pattern/README.md
     */
    'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

    /**
     * Specify a pattern for `%`-placeholders.
     * https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/percent-placeholder-pattern/README.md
     */
    'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

    /**
     * Disallow redundant nesting selectors (`&`).
     * https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md
     */
    'scss/selector-no-redundant-nesting-selector': true,
  },
}
