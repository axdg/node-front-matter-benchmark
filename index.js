// module dependancies
var Benchmark = require('benchmark');
var fs = require('fs');

// front-matter modules
var fm = require('front-matter');
var matter = require('gray-matter');
var dsfm = require('dsfm');

// samples
var body = 'some arbitrary content';
var head = '---\nfoo: bar\nbar: baz\n---\n';
var complex = fs.readFileSync('complex.yaml', 'utf-8');

// benchmarks
make('regular post', head + body).run();
make('complex front-matter', complex + body).run();
make('empty', '').run();
make('no front-matter', body).run();
make('no body', head).run();

// generates a benchmark
function make(name, doc) {
  var suite = new Benchmark.Suite;
  suite.add('front-matter', function () {
    fm(doc);
  });
  suite.add('gray-matter', function () {
    matter(doc);
  });
  suite.add('dsfm', function () {
    dsfm(doc);
  });
  suite.on('cycle', function (event) {
    console.log('  ' + String(event.target));
  });
  suite.on('complete', function () {
    console.log('');
  });
  console.log(name + ':');
  return suite;
}
