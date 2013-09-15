
try {
  var isArray = require('..');
  var assert = require('better-assert');
} catch (e) {
  var isArray = require('is-array');
  var assert = require('assert');
}

describe('is-array', function () {
  it('should return true when given arrays', function () {
    assert(isArray([]));
    assert(isArray([1, 2, 3]));
    assert(isArray(new Array));
    assert(isArray(new Array(3)));
  });

  it('should should return false when given non-arrays', function () {
    assert(isArray({}) === false);
    assert(isArray(null) === false);
    assert(isArray('') === false);
    assert(isArray(2) === false);
    assert(isArray(arguments) === false);
  });
});
