
/**
 * Export `maskXml` function.
 */

module.exports = (elements, {
  replacement = '--REDACTED--'
} = {}) => {
  return value => {
    for (const element of elements) {
      const search = new RegExp(`<${element}>(.+)</${element}>`, 'g');

      value = value.replace(search, `<${element}>${replacement}</${element}>`);
    }

    return value;
  };
};
