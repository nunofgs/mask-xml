
/**
 * Export `maskXml` function.
 */

export default (elements, {
  replacement = '--REDACTED--'
} = {}) => {
  return value => {
    for (const element of elements) {
      const search = new RegExp(`<${element}>(.+)</${element}>`);

      value = value.replace(search, `<${element}>${replacement}</${element}>`);
    }

    return value;
  };
};
