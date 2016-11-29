var aesthetic = require('./')

var Suite = require('benchmark').Benchmark.Suite
var bench = new Suite('aesthetic')

bench.add('for           ', function () {
  aesthetic('hello')
})

bench.add('for collapse  ', function () {
  aesthetic('hello        world')
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
