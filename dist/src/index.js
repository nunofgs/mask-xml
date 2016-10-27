'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

/**
 * Export `maskXml` function.
 */

exports.default = (elements, options) => {
  options = (0, _lodash.assign)({
    replacement: '--REDACTED--'
  }, options);

  return value => {
    for (const element of elements) {
      const search = new RegExp(`<${ element }>(.+)</${ element }>`);

      value = value.replace(search, `<${ element }>${ options.replacement }</${ element }>`);
    }

    return value;
  };
};
/**
 * Module dependencies.
 */