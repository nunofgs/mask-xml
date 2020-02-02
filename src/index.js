
/**
 * Export `maskXml` function.
 */

module.exports = (elements, {
  ignoreCase = false,
  replacement = '--REDACTED--'
} = {}) => {
  return value => {
    if (typeof value !== 'string') {
      return value;
    }
    
    let regexr = "(<(";
    
    // combining each element by the alternation operator instead of running the regex multiple times in the for loop
    // Not sure if using alternation operator and one time replace invocation has better performance than calling replace multiple times
    for (const element of elements) {
      regexr += element + "|";
    }
    
    regexr.substr(0,regexr.length-1); //remove the last extra pipe
    
    regexr += ")>)[^<]+(</\\2>)"; // the entire regex will be like /(<(element1|element2|...)>)[^<]+(<\/\2>)/g. Tip: try it out in regexr.com
    
    const search = new RegExp(`${regexr}`, `g${ignoreCase ? 'i' : ''}`);

    value = value.replace(search, `$1${replacement}$3`);

    return value;
  };
};
