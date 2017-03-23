
/**
 * Module dependencies.
 */

const maskXml = require('../index');

/**
 * Test `maskXml`.
 */

describe('maskXml()', () => {
  it('should accept a custom `replacement`', () => {
    const xml = `
      <foo>
        <password>foobar</password>
        <secret>bizbaz</secret>
      </foo>
    `;

    maskXml(['password', 'secret'], { replacement: '*****' })(xml).should.equal(`
      <foo>
        <password>*****</password>
        <secret>*****</secret>
      </foo>
    `);
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

    maskXml(['username', 'password'])(xml).should.equal(`
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
