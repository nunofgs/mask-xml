
/**
 * Module dependencies.
 */

const maskXml = require('src/index');

/**
 * Test `maskXml`.
 */

describe('maskXml()', () => {
  it('should accept a custom `ignoreCase`', () => {
    const xml = `
      <foo>
        <PaSSWorD>barbiz</PaSSWorD>
        <password>foobar</password>
        <secret>bizbaz</secret>
      </foo>
    `;

    expect(maskXml(['password', 'secret'], { ignoreCase: true })(xml)).toEqual(`
      <foo>
        <PaSSWorD>--REDACTED--</PaSSWorD>
        <password>--REDACTED--</password>
        <secret>--REDACTED--</secret>
      </foo>
    `);
  });

  it('should accept a custom `replacement`', () => {
    const xml = `
      <foo>
        <password>foobar</password>
        <secret>bizbaz</secret>
      </foo>
    `;

    expect(maskXml(['password', 'secret'], { replacement: '*****' })(xml)).toEqual(`
      <foo>
        <password>*****</password>
        <secret>*****</secret>
      </foo>
    `);
  });

  it('should skip masking non-strings', () => {
    [undefined, { biz: 'baz' }, 42].forEach(nonString => {
      expect(maskXml(['foo'])(nonString)).toEqual(nonString);
    });
  });

  it('should mask the given xml string', () => {
    const xml = `
      <xml>
        <foo>bar</foo>
        <password>foo</password>
        <username>bar</username>
        <bar>
          <password>foo</password>
        </bar>
      </xml>
    `;

    expect(maskXml(['username', 'password'])(xml)).toEqual(`
      <xml>
        <foo>bar</foo>
        <password>--REDACTED--</password>
        <username>--REDACTED--</username>
        <bar>
          <password>--REDACTED--</password>
        </bar>
      </xml>
    `);
  });
});
