# swahili [![Software License][ico-license]](LICENSE.md) [![npm][ico-version]](https://www.npmjs.com/package/swahili) [![Github Fork](https://img.shields.io/github/forks/alphaolomi/swahili?logo=github&style=flat-square)](https://github.com/alphaolomi/swahili) [![NPM](https://nodei.co/npm/swahili.png?mini=true)](https://nodei.co/npm/swahili/) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Falphaolomi%2Fswahili&count_bg=%2379C83D&title_bg=%23555555&icon=codeigniter.svg&icon_color=%23E7E7E7&title=hits&edge_flat=true)](https://hits.seeyoufarm.com)

Generate random swahili words

## Quick start

```bash
yarn add swahili
```

## Usage
### Generate random word

```javascript
import swahili from 'swahili';

const sw = new swahili();

console.log(sw.random()); // Output: fedha
```
### Random words by passing number of words argument in the costructor

```javascript
import swahili from 'swahili';

const sw = new swahili(10); // json output with 10 words

console.log(sw.random()); 
```
### Paragrah from random words 

```javascript
import swahili from 'swahili';

const sw = new swahili(10); // string output with 10 words

console.log(sw.paragraph()); 
```

### Array from random words 

```javascript
import swahili from 'swahili';

const sw = new swahili(10); // array output with 10 words

console.log(sw.randomArray()); 
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

## Credits

[![](https://sourcerer.io/fame/alphaolomi/alphaolomi/swahili/images/0)](https://sourcerer.io/fame/alphaolomi/alphaolomi/swahili/links/0)[![](https://sourcerer.io/fame/alphaolomi/alphaolomi/swahili/images/1)](https://sourcerer.io/fame/alphaolomi/alphaolomi/swahili/links/1)[![](https://sourcerer.io/fame/alphaolomi/alphaolomi/swahili/images/2)](https://sourcerer.io/fame/alphaolomi/alphaolomi/swahili/links/2)[![](https://sourcerer.io/fame/alphaolomi/alphaolomi/swahili/images/3)](https://sourcerer.io/fame/alphaolomi/alphaolomi/swahili/links/3)[![](https://sourcerer.io/fame/alphaolomi/alphaolomi/swahili/images/4)](https://sourcerer.io/fame/alphaolomi/alphaolomi/swahili/links/4)[![](https://sourcerer.io/fame/alphaolomi/alphaolomi/swahili/images/5)](https://sourcerer.io/fame/alphaolomi/alphaolomi/swahili/links/5)[![](https://sourcerer.io/fame/alphaolomi/alphaolomi/swahili/images/6)](https://sourcerer.io/fame/alphaolomi/alphaolomi/swahili/links/6)[![](https://sourcerer.io/fame/alphaolomi/alphaolomi/swahili/images/7)](https://sourcerer.io/fame/alphaolomi/alphaolomi/swahili/links/7)

[ico-version]: https://img.shields.io/npm/v/swahili?style=flat-square
[ico-license]: https://img.shields.io/badge/license-Apache2-brightgreen.svg?style=flat-square
[link-author]: https://github.com/alphaolomi
[link-contributors]: ../../contributors
