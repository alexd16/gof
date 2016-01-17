var expect = require('expect.js')
var hello = require('./hello');

describe('hello', ()=> {
  it('returns hello', ()=> {
    expect(hello()).to.be('Hello World');
  });
});