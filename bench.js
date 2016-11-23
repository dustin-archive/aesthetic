var aesthetic = require('./')

var Suite = require('benchmark').Benchmark.Suite
var bench = new Suite('aesthetic')

bench.add('mac:   aesthetic "world"', function () {
  aesthetic.mac('hello        world')
})

bench.add('linux: aesthetic "world"', function () {
  aesthetic.linux('hello        world')
})

// bench.add('regex "world"', function () {
//   'hello        world'.replace(/\s+/g, ' ').split('').join(' ')
// })

// Setup logger
bench.on('cycle', function(event) {
  console.log(String(event.target))
})

bench.on('error', console.error)

bench.run()
