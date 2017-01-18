module.exports = function (v) {
  for (
    // i = index
    // r = result
    // x = current character
    // l = last character from previous iteration
    var i = v.length, r = '', x, l;

    // negative iteration as condition
    i--;

    // store current item
    x = v[i],

    // if result is true
    r = r ?

      // if current and last characters are both spaces
      x === ' ' && l === ' ' ?

        // then result (collapse extra spaces)
        r :

        // else add current character to begining of result with a space
        x + ' ' + r :

      // else add current character to begining of result
      x + r,

    // store current character for next iteration
    l = x
  )

  // return result
  return r
}
