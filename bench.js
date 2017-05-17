var aesthetic = require('./')

var Suite = require('benchmark').Benchmark.Suite
var bench = new Suite('aesthetic')

var a = 'hello________world'
var b = 'hello        world'

bench.add('for           ', function () {
  aesthetic(a)
})

bench.add('for collapse  ', function () {
  aesthetic(b)
})

bench.add('regex         ', function () {
  a.replace(/\s+/g, ' ').split('').join(' ')
})

bench.add('regex collapse', function () {
  b.replace(/\s+/g, ' ').split('').join(' ')
})

// Setup logger
bench.on('cycle', function (event) {
  console.log(String(event.target))
})

bench.on('error', console.error)

bench.run()
