var test = require('tape')
var aesthetic = require('./')
var block = require('./block')
var human = require('./human')

test('M A K E   A E S T H E T I C', function (t) {
  t.plan(3)
  t.is(aesthetic('hello'), 'h e l l o', 'make aesthetic')
  t.is(aesthetic('hello world'), 'h e l l o   w o r l d', 'expand space')
  t.is(aesthetic('hello        world'), 'h e l l o   w o r l d', 'collapse space')
})

test('M A K E   A E S T H E T I C   B L O C K', function (t) {
  t.plan(3)
  t.is(block('hello'), 'h e l l o', 'make aesthetic')
  t.is(block('hello world'), 'h e l l o   w o r l d', 'expand space')
  t.is(block('hello        world'), 'h e l l o   w o r l d', 'collapse space')
})

test('M A K E   A E S T H E T I C   H U M A N', function (t) {
  t.plan(3)
  t.is(human('hello'), 'h e l l o', 'make aesthetic')
  t.is(human('hello world'), 'h e l l o   w o r l d', 'expand space')
  t.is(human('hello        world'), 'h e l l o   w o r l d', 'collapse space')
})
