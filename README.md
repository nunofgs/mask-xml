# mask-xml

Redacts values in xml. Useful when sending data to external logging services such as [Sentry](http://app.getsentry.com/).

## Status

  [![npm version][npm-image]][npm-url]
  [![npm downloads][downloads-image]][downloads-url]
  [![build status][travis-image]][travis-url]

## Installation

  Install the package via `npm`:

```
$ npm install mask-xml
```

## Usage

#### Arguments

  1. `collection` *(Array)*: An array of keys to redact.
  2. `[options]` *(Object)*: An optional object with the following options:

| Option        | Default value  | Description                  |
|---------------|----------------|------------------------------|
| _replacement_ | _--REDACTED--_ | The default value to replace |

#### Returns

  *(Function)*: Returns a function that will redact values from a given xml string.

#### Example

```js
var blacklist = ['password', 'secret'];
var maskXml = require('mask-xml')(blacklist);

maskXml(`<xml><password>foo</password><username>bar</username></xml>`);

// => '<xml><password>--REDACTED--</password><username>--REDACTED--</username></xml>'
```

## Tests

```js
$ npm test
```

## License

MIT

[downloads-image]: https://img.shields.io/npm/dm/mask-xml.svg
[downloads-url]: https://npmjs.org/package/mask-xml
[npm-image]: https://img.shields.io/npm/v/mask-xml.svg
[npm-url]: https://npmjs.org/package/mask-xml
[travis-image]: https://travis-ci.org/seegno/mask-xml.svg
[travis-url]: https://travis-ci.org/seegno/mask-xml
