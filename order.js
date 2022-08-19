module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    /**
     * Specify the order of content within declaration blocks.
     * https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md
     */
    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        {
          type: 'at-rule',
          name: 'extend',
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: false,
        },
        'declarations',
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: true,
        },
        'rules',
      ],
    ],

    /**
     * Specify the alphabetical order of properties within declaration blocks.
     * https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-alphabetical-order/README.md
     */
    'order/properties-alphabetical-order': true,
  },
}
