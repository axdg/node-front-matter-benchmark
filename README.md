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
$ git clone https://github.com/axdg/nfmb.git && cd nfmb && npm install
```

## Usage

```
$ npm run benchmark
```

The results of the benchmarks will be printed to stdout and piped them the benchmarks.txt


