
/**
 * Module dependencies.
 */

import { assign } from 'lodash';

/**
 * Export `maskXml` function.
 */

export default (elements, options) => {
  options = assign({
    replacement: '--REDACTED--'
  }, options);

  return value => {
    for (const element of elements) {
      const search = new RegExp(`<${element}>(.+)</${element}>`);

      value = value.replace(search, `<${element}>${options.replacement}</${element}>`);
    }

    return value;
  };
};
