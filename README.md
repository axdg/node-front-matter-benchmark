## node front-matter benchmarks

## Description

Bechmarks are run against [front-matter](https://github.com/jxson/front-matter), [gray-matter](https://github.com/jonschlinkert/gray-matter) and [dsfm](https://github.com/axdg/dsfm).  

Given the variables;

```
body = 'some arbitrary content';
head = '---\nfoo: bar\nbar: baz\n---\n';
complex = fs.readFileSync('complex.yaml', 'utf-8');  // yaml.org
```

This suite will will run five benchmarks for each modules [yaml](yaml.org) front-matter parsing function;

```
 - regular post //=> head + body
 - complex front-matter //=> complex + body
 - empty //=> ''
 - no front-matter //=> body
 - no content //=> head
```

## Install

```
$ git clone https://github.com/axdg/node-front-matter-benchmark.git 
$ cd node-front-matter-benchmark && npm install
```

## Usage

```
$ npm run benchmark
```

The results of the benchmarks will be printed to stdout and piped to the benchmarks.txt

## Results

> 2013 1.3GHz MBA 

```
regular post:
  front-matter x 132,731 ops/sec ±3.15% (76 runs sampled)
  gray-matter x 156,928 ops/sec ±2.11% (80 runs sampled)
  dsfm x 190,168 ops/sec ±1.59% (84 runs sampled)

complex front-matter:
  front-matter x 3,303 ops/sec ±2.05% (82 runs sampled)
  gray-matter x 5,071 ops/sec ±2.14% (77 runs sampled)
  dsfm x 4,942 ops/sec ±1.88% (79 runs sampled)

empty:
  front-matter x 5,789,051 ops/sec ±2.07% (77 runs sampled)
  gray-matter x 21,404,371 ops/sec ±2.08% (80 runs sampled)
  dsfm x 8,769,811 ops/sec ±1.75% (85 runs sampled)

no front-matter:
  front-matter x 2,740,460 ops/sec ±1.97% (79 runs sampled)
  gray-matter x 9,488,978 ops/sec ±2.31% (77 runs sampled)
  dsfm x 19,819,907 ops/sec ±1.83% (81 runs sampled)

no body:
  front-matter x 133,732 ops/sec ±2.75% (77 runs sampled)
  gray-matter x 152,485 ops/sec ±2.08% (82 runs sampled)
  dsfm x 189,329 ops/sec ±1.93% (81 runs sampled)
```
