
var toString = Object.prototype.toString;

/**
 * Check if `obj` is an Array
 *
 * @api public
 * @param {Mixed} obj
 * @return {Boolean}
 */
module.exports = Array.isArray || function (obj) {
  return toString.call(obj) === '[object Array]';
};
