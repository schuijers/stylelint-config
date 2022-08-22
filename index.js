const scssConfig = require('./scss')

module.exports = {
  extends: ['stylelint-config-prettier', './order.js'],
  rules: {
    /**
     * Disable rules that conflict with Prettier.
     */
    'at-rule-empty-line-before': null,
    'at-rule-name-case': null,
    'at-rule-name-space-after': null,
    'at-rule-semicolon-newline-after': null,
    'block-closing-brace-empty-line-before': null,
    'block-closing-brace-newline-after': null,
    'block-closing-brace-newline-before': null,
    'block-closing-brace-space-before': null,
    'block-opening-brace-newline-after': null,
    'block-opening-brace-space-after': null,
    'block-opening-brace-space-before': null,
    'color-hex-case': null,
    'declaration-bang-space-after': null,
    'declaration-bang-space-before': null,
    'declaration-block-semicolon-newline-after': null,
    'declaration-block-semicolon-space-after': null,
    'declaration-block-semicolon-space-before': null,
    'declaration-block-trailing-semicolon': null,
    'declaration-colon-newline-after': null,
    'declaration-colon-space-after': null,
    'declaration-colon-space-before': null,
    'function-comma-newline-after': null,
    'function-comma-space-after': null,
    'function-comma-space-before': null,
    'function-max-empty-lines': null,
    'function-parentheses-newline-inside': null,
    'function-parentheses-space-inside': null,
    indentation: null,
    'max-empty-lines': null,
    'max-line-length': null,
    'media-feature-colon-space-after': null,
    'media-feature-colon-space-before': null,
    'media-feature-name-case': null,
    'media-feature-parentheses-space-inside': null,
    'media-query-list-comma-newline-after': null,
    'media-query-list-comma-space-after': null,
    'media-query-list-comma-space-before': null,
    'no-empty-first-line': null,
    'no-eol-whitespace': null,
    'no-extra-semicolons': null,
    'no-missing-end-of-source-newline': null,
    'number-leading-zero': null,
    'number-no-trailing-zeros': null,
    'property-case': null,
    'selector-attribute-brackets-space-inside': null,
    'selector-attribute-operator-space-after': null,
    'selector-attribute-operator-space-before': null,
    'selector-attribute-quotes': null,
    'selector-combinator-space-after': null,
    'selector-combinator-space-before': null,
    'selector-descendant-combinator-no-non-space': null,
    'selector-list-comma-newline-after': null,
    'selector-list-comma-space-before': null,
    'selector-max-empty-lines': null,
    'selector-pseudo-class-case': null,
    'selector-pseudo-class-parentheses-space-inside': null,
    'selector-pseudo-element-case': null,
    'string-quotes': null,
    'unit-case': null,
    'value-list-comma-newline-after': null,
    'value-list-comma-space-after': null,
    'value-list-comma-space-before': null,
    'value-list-max-empty-lines': null,

    /**
     * Specify percentage or number notation for alpha-values.
     * https://stylelint.io/user-guide/rules/list/alpha-value-notation
     */
    'alpha-value-notation': [
      'percentage',
      {
        exceptProperties: ['opacity'],
      },
    ],

    /**
     * Disallow unknown at-rules.
     * https://stylelint.io/user-guide/rules/list/at-rule-no-unknown
     */
    'at-rule-no-unknown': true,

    /**
     * Disallow vendor prefixes for at-rules.
     * https://stylelint.io/user-guide/rules/list/at-rule-no-vendor-prefix
     */
    'at-rule-no-vendor-prefix': true,

    /**
     * Disallow empty blocks.
     * https://stylelint.io/user-guide/rules/list/block-no-empty
     */
    'block-no-empty': true,

    /**
     * Specify modern or legacy notation for applicable color-functions.
     * https://stylelint.io/user-guide/rules/list/color-function-notation
     */
    'color-function-notation': 'modern',

    /**
     * Specify short or long notation for hex colors.
     * https://stylelint.io/user-guide/rules/list/color-hex-length
     */
    'color-hex-length': 'short',

    /**
     * Require (where possible) or disallow named colors.
     * https://stylelint.io/user-guide/rules/list/color-named
     */
    'color-named': 'never',

    /**
     * Disallow invalid hex colors.
     * https://stylelint.io/user-guide/rules/list/color-no-invalid-hex
     */
    'color-no-invalid-hex': true,

    /**
     * Require or disallow an empty line before comments.
     * https://stylelint.io/user-guide/rules/list/comment-empty-line-before
     */
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],

    /**
     * Disallow empty comments.
     * https://stylelint.io/user-guide/rules/list/comment-no-empty
     */
    'comment-no-empty': true,

    /**
     * Require or disallow whitespace on the inside of comment markers.
     * https://stylelint.io/user-guide/rules/list/comment-whitespace-inside
     */
    'comment-whitespace-inside': 'always',

    /**
     * Specify a pattern for custom media query names.
     * https://stylelint.io/user-guide/rules/list/custom-media-pattern
     */
    'custom-media-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected custom media query name to be kebab-case',
      },
    ],

    /**
     * Require or disallow an empty line before custom properties.
     * https://stylelint.io/user-guide/rules/list/custom-property-empty-line-before
     */
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],

    /**
     * Disallow missing `var` function for custom properties.
     * https://stylelint.io/user-guide/rules/list/custom-property-no-missing-var-function
     */
    'custom-property-no-missing-var-function': true,

    /**
     * Specify a pattern for custom properties.
     * https://stylelint.io/user-guide/rules/list/custom-property-pattern
     */
    'custom-property-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected custom property name to be kebab-case',
      },
    ],

    /**
     * Disallow duplicate custom properties within declaration blocks.
     * https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-custom-properties
     */
    'declaration-block-no-duplicate-custom-properties': true,

    /**
     * Disallow duplicate properties within declaration blocks.
     * https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-properties
     */
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],

    /**
     * Disallow shorthand properties that override related longhand properties.
     * https://stylelint.io/user-guide/rules/list/declaration-block-no-shorthand-property-overrides
     */
    'declaration-block-no-shorthand-property-overrides': true,

    /**
     * Disallow longhand properties that can be combined into one shorthand property.
     * https://stylelint.io/user-guide/rules/list/declaration-block-no-redundant-longhand-properties
     */
    'declaration-block-no-redundant-longhand-properties': true,

    /**
     * Limit the number of declarations within a single-line declaration block.
     * https://stylelint.io/user-guide/rules/list/declaration-block-single-line-max-declarations
     */
    'declaration-block-single-line-max-declarations': 1,

    /**
     * Require or disallow an empty line before declarations.
     * https://stylelint.io/user-guide/rules/list/declaration-empty-line-before
     */
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],

    /**
     * Specify a list of disallowed property and value pairs within declarations.
     * https://stylelint.io/user-guide/rules/list/declaration-property-value-disallowed-list
     */
    'declaration-property-value-disallowed-list': {
      border: ['none'],
      'border-bottom': ['none'],
      'border-left': ['none'],
      'border-right': ['none'],
      'border-top': ['none'],
    },

    /**
     * Specify whether or not quotation marks should be used around font family names.
     * https://stylelint.io/user-guide/rules/list/font-family-name-quotes
     */
    'font-family-name-quotes': 'always-where-recommended',

    /**
     * Disallow duplicate font family names.
     * https://stylelint.io/user-guide/rules/list/font-family-no-duplicate-names
     */
    'font-family-no-duplicate-names': true,

    /**
     * Disallow missing generic families in lists of font family names.
     * https://stylelint.io/user-guide/rules/list/font-family-no-missing-generic-family-keyword
     */
    'font-family-no-missing-generic-family-keyword': true,

    /**
     * Disallow an unspaced operator within `calc` functions.
     * https://stylelint.io/user-guide/rules/list/function-calc-no-unspaced-operator
     */
    'function-calc-no-unspaced-operator': true,

    /**
     * Disallow direction values in `linear-gradient()` calls that are not valid according to the standard syntax.
     * https://stylelint.io/user-guide/rules/list/function-linear-gradient-no-nonstandard-direction
     */
    'function-linear-gradient-no-nonstandard-direction': true,

    /**
     * Specify lowercase or uppercase for function names.
     * https://stylelint.io/user-guide/rules/list/function-name-case
     */
    'function-name-case': 'lower',

    /**
     * Disallow unknown functions.
     * https://stylelint.io/user-guide/rules/list/function-no-unknown
     */
    'function-no-unknown': true,

    /**
     * Require or disallow quotes for urls.
     * https://stylelint.io/user-guide/rules/list/function-url-quotes
     */
    'function-url-quotes': 'always',

    /**
     * Require or disallow whitespace after functions.
     * https://stylelint.io/user-guide/rules/list/function-whitespace-after
     */
    'function-whitespace-after': 'always',

    /**
     * Specify number or angle notation for degree hues.
     * https://stylelint.io/user-guide/rules/list/hue-degree-notation
     */
    'hue-degree-notation': 'angle',

    /**
     * Specify string or URL notation for `@import` rules.
     * https://stylelint.io/user-guide/rules/list/import-notation
     */
    'import-notation': 'string',

    /**
     * Disallow duplicate selectors within keyframe blocks.
     * https://stylelint.io/user-guide/rules/list/keyframe-block-no-duplicate-selectors
     */
    'keyframe-block-no-duplicate-selectors': true,

    /**
     * Disallow `!important` within keyframe declarations.
     * https://stylelint.io/user-guide/rules/list/keyframe-declaration-no-important
     */
    'keyframe-declaration-no-important': true,

    /**
     * Specify a pattern for keyframe names.
     * https://stylelint.io/user-guide/rules/list/keyframes-name-pattern
     */
    'keyframes-name-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected keyframe name to be kebab-case',
      },
    ],

    /**
     * Disallow units for zero lengths.
     * https://stylelint.io/user-guide/rules/list/length-zero-no-unit
     */
    'length-zero-no-unit': true,

    /**
     * Disallow unknown media feature names.
     * https://stylelint.io/user-guide/rules/list/media-feature-name-no-unknown
     */
    'media-feature-name-no-unknown': true,

    /**
     * Disallow vendor prefixes for media feature names.
     * https://stylelint.io/user-guide/rules/list/media-feature-name-no-vendor-prefix
     */
    'media-feature-name-no-vendor-prefix': true,

    /**
     * Require a single space or disallow whitespace after the range operator in media features.
     * https://stylelint.io/user-guide/rules/list/media-feature-range-operator-space-after
     */
    'media-feature-range-operator-space-after': 'always',

    /**
     * Require a single space or disallow whitespace before the range operator in media features.
     * https://stylelint.io/user-guide/rules/list/media-feature-range-operator-space-before
     */
    'media-feature-range-operator-space-before': 'always',

    /**
     * Disallow invalid named grid areas.
     * https://stylelint.io/user-guide/rules/list/named-grid-areas-no-invalid
     */
    'named-grid-areas-no-invalid': true,

    /**
     * Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
     * https://stylelint.io/user-guide/rules/list/no-descending-specificity
     */
    'no-descending-specificity': true,

    /**
     * Disallow duplicate `@import` rules within a stylesheet.
     * https://stylelint.io/user-guide/rules/list/no-duplicate-at-import-rules
     */
    'no-duplicate-at-import-rules': true,

    /**
     * Disallow duplicate selectors within a stylesheet.
     * https://stylelint.io/user-guide/rules/list/no-duplicate-selectors
     */
    'no-duplicate-selectors': true,

    /**
     * Disallow empty sources.
     * https://stylelint.io/user-guide/rules/list/no-empty-source
     */
    'no-empty-source': true,

    /**
     * Disallow double-slash comments (`//...`) which are not supported by CSS.
     * https://stylelint.io/user-guide/rules/list/no-invalid-double-slash-comments
     */
    'no-invalid-double-slash-comments': true,

    /**
     * Disallow invalid position `@import` rules within a stylesheet..
     * https://stylelint.io/user-guide/rules/list/no-invalid-position-at-import-rule
     */
    'no-invalid-position-at-import-rule': true,

    /**
     * Disallow irregular whitespace.
     * https://stylelint.io/user-guide/rules/list/no-irregular-whitespace
     */
    'no-irregular-whitespace': true,

    /**
     * Limit the number of decimal places allowed in numbers.
     * https://stylelint.io/user-guide/rules/list/number-max-precision
     */
    'number-max-precision': 4,

    /**
     * Disallow unknown properties.
     * https://stylelint.io/user-guide/rules/list/property-no-unknown
     */
    'property-no-unknown': true,

    /**
     * Disallow vendor prefixes for properties.
     * https://stylelint.io/user-guide/rules/list/property-no-vendor-prefix
     */
    'property-no-vendor-prefix': true,

    /**
     * Require or disallow an empty line before rules.
     * https://stylelint.io/user-guide/rules/list/rule-empty-line-before
     */
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],

    /**
     * Specify a pattern for class selectors.
     * https://stylelint.io/user-guide/rules/list/selector-class-pattern
     */
    'selector-class-pattern': [
      '^(([a-z][a-z0-9]*)(-[a-z0-9]+)*)?(__(([a-z][a-z0-9]*)(-[a-z0-9]+)*))?(--(([a-z][a-z0-9]*)(-[a-z0-9]+)*))?$',
      {
        message: 'Expected class selector to be kebab-case (BEM is allowed)',
      },
    ],

    /**
     * Specify a pattern for ID selectors.
     * https://stylelint.io/user-guide/rules/list/selector-id-pattern
     */
    'selector-id-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected id selector to be kebab-case',
      },
    ],

    /**
     * Limit the number of compound selectors in a selector.
     * https://stylelint.io/user-guide/rules/list/selector-max-compound-selectors
     */
    'selector-max-compound-selectors': 3,

    /**
     * Limit the number of ID selectors in a selector.
     * https://stylelint.io/user-guide/rules/list/selector-max-id
     */
    'selector-max-id': 0,

    /**
     * Disallow qualifying a selector by type.
     * https://stylelint.io/user-guide/rules/list/selector-no-qualifying-type
     */
    'selector-no-qualifying-type': true,

    /**
     * Disallow vendor prefixes for selectors.
     * https://stylelint.io/user-guide/rules/list/selector-no-vendor-prefix
     */
    'selector-no-vendor-prefix': true,

    /**
     * Specify simple or complex notation for `:not()` pseudo-classes.
     * https://stylelint.io/user-guide/rules/list/selector-not-notation
     */
    'selector-not-notation': 'complex',

    /**
     * Disallow unknown pseudo-class selectors.
     * https://stylelint.io/user-guide/rules/list/selector-pseudo-class-no-unknown
     */
    'selector-pseudo-class-no-unknown': true,

    /**
     * Specify single or double colon notation for applicable pseudo-elements.
     * https://stylelint.io/user-guide/rules/list/selector-pseudo-element-colon-notation
     */
    'selector-pseudo-element-colon-notation': 'double',

    /**
     * Disallow unknown pseudo-element selectors.
     * https://stylelint.io/user-guide/rules/list/selector-pseudo-element-no-unknown
     */
    'selector-pseudo-element-no-unknown': true,

    /**
     * Specify lowercase or uppercase for type selectors.
     * https://stylelint.io/user-guide/rules/list/selector-type-case
     */
    'selector-type-case': 'lower',

    /**
     * Disallow unknown type selectors.
     * https://stylelint.io/user-guide/rules/list/selector-type-no-unknown
     */
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
      },
    ],

    /**
     * Disallow redundant values in shorthand properties.
     * https://stylelint.io/user-guide/rules/list/shorthand-property-no-redundant-values
     */
    'shorthand-property-no-redundant-values': true,

    /**
     * Disallow (unescaped) newlines in strings.
     * https://stylelint.io/user-guide/rules/list/string-no-newline
     */
    'string-no-newline': true,

    /**
     * Disallow unknown units.
     * https://stylelint.io/user-guide/rules/list/unit-no-unknown
     */
    'unit-no-unknown': true,

    /**
     * Specify lowercase or uppercase for keywords values.
     * https://stylelint.io/user-guide/rules/list/value-keyword-case
     */
    'value-keyword-case': [
      'lower',
      {
        camelCaseSvgKeywords: true,
        ignoreProperties: ['text-rendering'],
      },
    ],

    /**
     * Disallow vendor prefixes for values.
     * https://stylelint.io/user-guide/rules/list/value-no-vendor-prefix
     */
    'value-no-vendor-prefix': true,
  },
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      ...scssConfig,
    },
  ],
}
