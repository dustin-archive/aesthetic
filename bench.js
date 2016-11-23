var aesthetic = require('./')

var Suite = require('benchmark').Benchmark.Suite;
var bench = new Suite('aesthetic');

bench.add('autistic "world"', function () {
  aesthetic("world")
})

// Setup logger.
bench.on('cycle', function(event) {
  console.log(String(event.target));
});

bench.on('error', console.error);

bench.run();
