# mask-xml

Redacts values in xml. Useful when sending data to external logging services such as [Sentry](http://app.getsentry.com/).

## Status

[![npm version][npm-image]][downloads-url] [![npm downloads][downloads-image]][downloads-url] [![build status][workflow-image]][workflow-url]

## Installation

Install the package via `npm`:

```
$ npm install mask-xml
```

## Usage

### Arguments

1. `collection` _(Array)_: An array of keys to redact.
2. `[options]` _(Object)_: An optional object with the following options:

Option        | Default value  | Description
------------- | -------------- | ----------------------------
_ignoreCase_  | false          | Whether to ignore case sensitivity when matching keys
_replacement_ | _--REDACTED--_ | The default value to replace

### Returns

_(Function)_: Returns a function that will redact values from a given xml string.

### Example

```javascript
var blacklist = ['password', 'username'];
var maskXml = require('mask-xml')(blacklist);

maskXml(`<xml><password>foo</password><username>bar</username></xml>`);

// => '<xml><password>--REDACTED--</password><username>--REDACTED--</username></xml>'
```

## Tests

```javascript
$ npm test
```

## Release

```sh
npm version [<new version> | major | minor | patch] -m "Release %s"
```

## License

MIT

[downloads-image]: https://img.shields.io/npm/dm/mask-xml.svg
[downloads-url]: https://npmjs.org/package/mask-xml
[npm-image]: https://img.shields.io/npm/v/mask-xml.svg
[npm-url]: https://npmjs.org/package/mask-xml
[workflow-image]: https://github.com/nunofgs/mask-xml/workflows/Node%20CI/badge.svg
[workflow-url]: https://github.com/nunofgs/mask-xml/actions
