# swahili

[![Software License][ico-license]](LICENSE.md)
[![npm][ico-version]](https://www.npmjs.com/package/swahili)

Generate swahiili words

## Quick start

```bash
npm i swahili
# or
yarn add swahili
```

## Usage

```javascript
const Swahili = require("swahili");

const sw = new Swahili();

// Generate one word
console.log(sw.random()); // mimi

console.log(sw.random(2)); // ['yule', 'na']
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Testing

```bash
$ yarn test
```

## Contributing

Pull requests are welcome. Please see [CONTRIBUTING](./.github/CONTRIBUTING.md) and [CODE_OF_CONDUCT](./.github/CODE_OF_CONDUCT.md) for details.

## Security

If you discover any security related issues, please email [hello@alphaolomi.com](mailto:hello@alphaolomi.com) instead of using the issue tracker.

## Credits

- **Alpha Olomi** [hello@alphaolomi.com](hello@alphaolomi.com)
- [All Contributors][link-contributors]

## License

The Apache 2 License. Please see [License File](LICENSE) for more information.

[ico-version]: https://img.shields.io/npm/v/swahili?style=flat-square
[ico-license]: https://img.shields.io/badge/license-Apache2-brightgreen.svg?style=flat-square
[link-author]: https://github.com/alphaolomi
[link-contributors]: ../../contributors
