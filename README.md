# @schuijers/stylelint-config [![GitHub Build Status][shield-github-build-status]][shield-github-build-status] [![npm][shield-npm]][npm] [![MIT License][shield-license]][license]

My shareable Stylelint configs.

## Installation

```shell script
# npm
npm install --save-dev @schuijers/stylelint-config

# yarn
yarn add --dev @schuijers/stylelint-config

# pnpm
pnpm add --save-dev @schuijers/stylelint-config
```

This library has required `peerDependencies` listings for [`stylelint`](https://stylelint.io/) and
[`postcss`](https://postcss.org/).

## Usage

Reference `@schuijers/stylelint-config` in your `.stylelintrc.js`.

<!-- prettier-ignore -->
```javascript
module.exports = {
  extends: '@schuijers/stylelint-config',
  rules: {
    // your overrides
  },
}
```

### Other configs

Besides the base config (for CSS and SCSS) this package also exposes some additional configs:

| Config Name | Description                                                                  |
| ----------- | ---------------------------------------------------------------------------- |
| `vue`       | Additional rules for projects that use [Vue](https://vuejs.org/) (with SCSS) |

You can use them standalone:

<!-- prettier-ignore -->
```javascript
module.exports = {
  extends: '@schuijers/stylelint-config/<config-name>',
}
```

Or in combination with the base config (recommended):

<!-- prettier-ignore -->
```javascript
module.exports = {
  extends: [
    '@schuijers/stylelint-config',
    '@schuijers/stylelint-config/<config-name>',
  ],
}
```

## License

[MIT][license] &copy; [Martijn Schuijers][me]

[license]: ./LICENSE
[me]: https://github.com/schuijers
[npm]: https://npmjs.org/package/@schuijers/stylelint-config
[shield-github-build-status]:
  https://github.com/schuijers/stylelint-config/workflows/Release/badge.svg
[shield-license]: https://img.shields.io/badge/License-MIT-lavender.svg
[shield-npm]: https://img.shields.io/npm/v/@schuijers/stylelint-config.svg
