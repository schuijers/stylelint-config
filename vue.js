const scssConfig = require('./scss')

module.exports = {
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      plugins: [...scssConfig.plugins],
      rules: {
        ...scssConfig.rules,

        /**
         * Vue specific overrides.
         */
        'function-no-unknown': [
          true,
          {
            ignoreFunctions: ['v-bind'],
          },
        ],

        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'global'],
          },
        ],

        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
          },
        ],
      },
    },
  ],
}
