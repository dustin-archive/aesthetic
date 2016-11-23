var aesthetic = require('./')

var Suite = require('benchmark').Benchmark.Suite
var bench = new Suite('aesthetic')

bench.add('aesthetic "world"', function () {
  aesthetic('hello        world')
})

bench.add('regex "world"', function () {
  'hello        world'.replace(/\s+/g, ' ').split('').join(' ')
})

// Setup logger
bench.on('cycle', function(event) {
  console.log(String(event.target))
})

bench.on('error', console.error)

bench.run()
