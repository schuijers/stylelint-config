const scssConfig = require('./scss')

module.exports = {
  extends: ['./order.js'],
  rules: {
    /**
     * Specify percentage or number notation for alpha-values.
     * https://stylelint.io/user-guide/rules/alpha-value-notation
     */
    'alpha-value-notation': [
      'percentage',
      {
        exceptProperties: ['opacity'],
      },
    ],

    /**
     * Disallow unknown at-rules.
     * https://stylelint.io/user-guide/rules/at-rule-no-unknown
     */
    'at-rule-no-unknown': true,

    /**
     * Disallow vendor prefixes for at-rules.
     * https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix
     */
    'at-rule-no-vendor-prefix': true,

    /**
     * Disallow empty blocks.
     * https://stylelint.io/user-guide/rules/block-no-empty
     */
    'block-no-empty': true,

    /**
     * Specify modern or legacy notation for applicable color-functions.
     * https://stylelint.io/user-guide/rules/color-function-notation
     */
    'color-function-notation': 'modern',

    /**
     * Specify short or long notation for hex colors.
     * https://stylelint.io/user-guide/rules/color-hex-length
     */
    'color-hex-length': 'short',

    /**
     * Require (where possible) or disallow named colors.
     * https://stylelint.io/user-guide/rules/color-named
     */
    'color-named': 'never',

    /**
     * Disallow invalid hex colors.
     * https://stylelint.io/user-guide/rules/color-no-invalid-hex
     */
    'color-no-invalid-hex': true,

    /**
     * Require or disallow an empty line before comments.
     * https://stylelint.io/user-guide/rules/comment-empty-line-before
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
     * https://stylelint.io/user-guide/rules/comment-no-empty
     */
    'comment-no-empty': true,

    /**
     * Require or disallow whitespace on the inside of comment markers.
     * https://stylelint.io/user-guide/rules/comment-whitespace-inside
     */
    'comment-whitespace-inside': 'always',

    /**
     * Specify a pattern for custom media query names.
     * https://stylelint.io/user-guide/rules/custom-media-pattern
     */
    'custom-media-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected custom media query name to be kebab-case',
      },
    ],

    /**
     * Require or disallow an empty line before custom properties.
     * https://stylelint.io/user-guide/rules/custom-property-empty-line-before
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
     * https://stylelint.io/user-guide/rules/custom-property-no-missing-var-function
     */
    'custom-property-no-missing-var-function': true,

    /**
     * Specify a pattern for custom properties.
     * https://stylelint.io/user-guide/rules/custom-property-pattern
     */
    'custom-property-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected custom property name to be kebab-case',
      },
    ],

    /**
     * Disallow duplicate custom properties within declaration blocks.
     * https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-custom-properties
     */
    'declaration-block-no-duplicate-custom-properties': true,

    /**
     * Disallow duplicate properties within declaration blocks.
     * https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties
     */
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],

    /**
     * Disallow shorthand properties that override related longhand properties.
     * https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides
     */
    'declaration-block-no-shorthand-property-overrides': true,

    /**
     * Disallow longhand properties that can be combined into one shorthand property.
     * https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties
     */
    'declaration-block-no-redundant-longhand-properties': true,

    /**
     * Limit the number of declarations within a single-line declaration block.
     * https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations
     */
    'declaration-block-single-line-max-declarations': 1,

    /**
     * Require or disallow an empty line before declarations.
     * https://stylelint.io/user-guide/rules/declaration-empty-line-before
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
     * https://stylelint.io/user-guide/rules/declaration-property-value-disallowed-list
     */
    'declaration-property-value-disallowed-list': {
      border: ['none'],
      'border-bottom': ['none'],
      'border-left': ['none'],
      'border-right': ['none'],
      'border-top': ['none'],
    },

    /**
     * Disallow unknown values for properties within declarations.
     * https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown
     */
    'declaration-property-value-no-unknown': true,

    /**
     * Specify whether or not quotation marks should be used around font family names.
     * https://stylelint.io/user-guide/rules/font-family-name-quotes
     */
    'font-family-name-quotes': 'always-where-recommended',

    /**
     * Disallow duplicate font family names.
     * https://stylelint.io/user-guide/rules/font-family-no-duplicate-names
     */
    'font-family-no-duplicate-names': true,

    /**
     * Disallow missing generic families in lists of font family names.
     * https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword
     */
    'font-family-no-missing-generic-family-keyword': true,

    /**
     * Disallow an unspaced operator within `calc` functions.
     * https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator
     */
    'function-calc-no-unspaced-operator': true,

    /**
     * Disallow direction values in `linear-gradient()` calls that are not valid according to the standard syntax.
     * https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction
     */
    'function-linear-gradient-no-nonstandard-direction': true,

    /**
     * Specify lowercase or uppercase for function names.
     * https://stylelint.io/user-guide/rules/function-name-case
     */
    'function-name-case': 'lower',

    /**
     * Disallow unknown functions.
     * https://stylelint.io/user-guide/rules/function-no-unknown
     */
    'function-no-unknown': true,

    /**
     * Require or disallow quotes for urls.
     * https://stylelint.io/user-guide/rules/function-url-quotes
     */
    'function-url-quotes': 'always',

    /**
     * Specify number or angle notation for degree hues.
     * https://stylelint.io/user-guide/rules/hue-degree-notation
     */
    'hue-degree-notation': 'angle',

    /**
     * Specify string or URL notation for `@import` rules.
     * https://stylelint.io/user-guide/rules/import-notation
     */
    'import-notation': 'string',

    /**
     * Disallow duplicate selectors within keyframe blocks.
     * https://stylelint.io/user-guide/rules/keyframe-block-no-duplicate-selectors
     */
    'keyframe-block-no-duplicate-selectors': true,

    /**
     * Disallow `!important` within keyframe declarations.
     * https://stylelint.io/user-guide/rules/keyframe-declaration-no-important
     */
    'keyframe-declaration-no-important': true,

    /**
     * Specify a pattern for keyframe names.
     * https://stylelint.io/user-guide/rules/keyframes-name-pattern
     */
    'keyframes-name-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected keyframe name to be kebab-case',
      },
    ],

    /**
     * Disallow units for zero lengths.
     * https://stylelint.io/user-guide/rules/length-zero-no-unit
     */
    'length-zero-no-unit': true,

    /**
     * Disallow unknown media feature names.
     * https://stylelint.io/user-guide/rules/media-feature-name-no-unknown
     */
    'media-feature-name-no-unknown': true,

    /**
     * Disallow vendor prefixes for media feature names.
     * https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix
     */
    'media-feature-name-no-vendor-prefix': true,

    /**
     * Specify context or prefix notation for media feature ranges.
     * https://stylelint.io/user-guide/rules/media-feature-range-notation
     */
    'media-feature-range-notation': [
      'context',
      {
        severity: 'warning',
      },
    ],

    /**
     * Disallow invalid named grid areas.
     * https://stylelint.io/user-guide/rules/named-grid-areas-no-invalid
     */
    'named-grid-areas-no-invalid': true,

    /**
     * Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
     * https://stylelint.io/user-guide/rules/no-descending-specificity
     */
    'no-descending-specificity': true,

    /**
     * Disallow duplicate `@import` rules within a stylesheet.
     * https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules
     */
    'no-duplicate-at-import-rules': true,

    /**
     * Disallow duplicate selectors within a stylesheet.
     * https://stylelint.io/user-guide/rules/no-duplicate-selectors
     */
    'no-duplicate-selectors': true,

    /**
     * Disallow empty sources.
     * https://stylelint.io/user-guide/rules/no-empty-source
     */
    'no-empty-source': true,

    /**
     * Disallow double-slash comments (`//...`) which are not supported by CSS.
     * https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments
     */
    'no-invalid-double-slash-comments': true,

    /**
     * Disallow invalid position `@import` rules within a stylesheet..
     * https://stylelint.io/user-guide/rules/no-invalid-position-at-import-rule
     */
    'no-invalid-position-at-import-rule': true,

    /**
     * Disallow irregular whitespace.
     * https://stylelint.io/user-guide/rules/no-irregular-whitespace
     */
    'no-irregular-whitespace': true,

    /**
     * Limit the number of decimal places allowed in numbers.
     * https://stylelint.io/user-guide/rules/number-max-precision
     */
    'number-max-precision': 4,

    /**
     * Disallow unknown properties.
     * https://stylelint.io/user-guide/rules/property-no-unknown
     */
    'property-no-unknown': true,

    /**
     * Disallow vendor prefixes for properties.
     * https://stylelint.io/user-guide/rules/property-no-vendor-prefix
     */
    'property-no-vendor-prefix': true,

    /**
     * Require or disallow an empty line before rules.
     * https://stylelint.io/user-guide/rules/rule-empty-line-before
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
     * https://stylelint.io/user-guide/rules/selector-class-pattern
     */
    'selector-class-pattern': [
      '^(([a-z][a-z0-9]*)(-[a-z0-9]+)*)?(__(([a-z][a-z0-9]*)(-[a-z0-9]+)*))?(--(([a-z][a-z0-9]*)(-[a-z0-9]+)*))?$',
      {
        message: 'Expected class selector to be kebab-case (BEM is allowed)',
      },
    ],

    /**
     * Specify a pattern for ID selectors.
     * https://stylelint.io/user-guide/rules/selector-id-pattern
     */
    'selector-id-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected id selector to be kebab-case',
      },
    ],

    /**
     * Limit the number of compound selectors in a selector.
     * https://stylelint.io/user-guide/rules/selector-max-compound-selectors
     */
    'selector-max-compound-selectors': 3,

    /**
     * Limit the number of ID selectors in a selector.
     * https://stylelint.io/user-guide/rules/selector-max-id
     */
    'selector-max-id': 0,

    /**
     * Disallow qualifying a selector by type.
     * https://stylelint.io/user-guide/rules/selector-no-qualifying-type
     */
    'selector-no-qualifying-type': true,

    /**
     * Disallow vendor prefixes for selectors.
     * https://stylelint.io/user-guide/rules/selector-no-vendor-prefix
     */
    'selector-no-vendor-prefix': true,

    /**
     * Specify simple or complex notation for `:not()` pseudo-classes.
     * https://stylelint.io/user-guide/rules/selector-not-notation
     */
    'selector-not-notation': 'complex',

    /**
     * Disallow unknown pseudo-class selectors.
     * https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown
     */
    'selector-pseudo-class-no-unknown': true,

    /**
     * Specify single or double colon notation for applicable pseudo-elements.
     * https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation
     */
    'selector-pseudo-element-colon-notation': 'double',

    /**
     * Disallow unknown pseudo-element selectors.
     * https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown
     */
    'selector-pseudo-element-no-unknown': true,

    /**
     * Specify lowercase or uppercase for type selectors.
     * https://stylelint.io/user-guide/rules/selector-type-case
     */
    'selector-type-case': 'lower',

    /**
     * Disallow unknown type selectors.
     * https://stylelint.io/user-guide/rules/selector-type-no-unknown
     */
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
      },
    ],

    /**
     * Disallow redundant values in shorthand properties.
     * https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values
     */
    'shorthand-property-no-redundant-values': true,

    /**
     * Disallow (unescaped) newlines in strings.
     * https://stylelint.io/user-guide/rules/string-no-newline
     */
    'string-no-newline': true,

    /**
     * Disallow unknown units.
     * https://stylelint.io/user-guide/rules/unit-no-unknown
     */
    'unit-no-unknown': true,

    /**
     * Specify lowercase or uppercase for keywords values.
     * https://stylelint.io/user-guide/rules/value-keyword-case
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
     * https://stylelint.io/user-guide/rules/value-no-vendor-prefix
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
