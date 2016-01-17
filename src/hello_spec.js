var expect = require('expect.js')
var hello = require('./hello');

describe('hello', function() {
  it('returns hello', function() {
    expect(hello()).to.be('Hello World');
  });
});