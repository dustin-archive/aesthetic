module.exports = function (v) {
  for (var i = v.length, r = '', x, l; i--;) {
    x = v[i]
    if (r) {
      if (x !== ' ' || l !== ' ') {
        r = x + ' ' + r
      }
    } else {
      r = x + r
    }
    l = x
  }
  return r
}
