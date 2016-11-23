var aesthetic = require('./')

var Suite = require('benchmark').Benchmark.Suite
var bench = new Suite('aesthetic')

bench.add('and:   aesthetic         ', function () {
  aesthetic.and('hello')
})

bench.add('and:   aesthetic collapse', function () {
  aesthetic.and('hello        world')
})

bench.add('plus:  aesthetic         ', function () {
  aesthetic.plus('hello')
})

bench.add('plus:  aesthetic collapse', function () {
  aesthetic.plus('hello        world')
})

bench.add('equal: aesthetic         ', function () {
  aesthetic.equal('hello')
})

bench.add('equal: aesthetic collapse', function () {
  aesthetic.equal('hello        world')
})

// bench.add('regex', function () {
//   'hello        world'.replace(/\s+/g, ' ').split('').join(' ')
// })

// Setup logger
bench.on('cycle', function(event) {
  console.log(String(event.target))
})

bench.on('error', console.error)

bench.run()
