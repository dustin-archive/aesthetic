var test = require('tape')
var aesthetic = require('./')

test('M A K E   A E S T H E T I C', function (t) {
  t.plan(3)
  t.is(aesthetic('hello'), 'h e l l o', 'does aesthetics')
  t.is(aesthetic('hello world'), 'h e l l o   w o r l d', 'expands space')
  t.is(aesthetic('hello         world'), 'h e l l o   w o r l d', 'collapses space')
})
