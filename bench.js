var aesthetic_f = require('./').f
var aesthetic_w = require('./').w

var Suite = require('benchmark').Benchmark.Suite
var bench = new Suite('aesthetic')

bench.add('for           ', function () {
  aesthetic_f('hello')
})

bench.add('for collapse  ', function () {
  aesthetic_f('hello        world')
})

bench.add('while         ', function () {
  aesthetic_w('hello')
})

bench.add('while collapse', function () {
  aesthetic_w('hello        world')
})

bench.add('regex         ', function () {
  'hello'.replace(/\s+/g, ' ').split('').join(' ')
})

bench.add('regex collapse', function () {
  'hello        world'.replace(/\s+/g, ' ').split('').join(' ')
})

// Setup logger
bench.on('cycle', function(event) {
  console.log(String(event.target))
})

bench.on('error', console.error)

bench.run()
