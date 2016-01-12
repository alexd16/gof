var hello = require('./hello');

describe('hello', function() {
  it('returns hello', function() {
    expect(hello()).toBe('Hello World');
  });
})