# laoyi [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> fan yi module for lao bros

## Installation

```sh
$ npm install --save laoyi
```

## Usage

* As lib
```js
const laoyi = require('laoyi');

laoyi('lao').then(data=>{console.log(data)});    // => 老
laoyi('捞得一').then(data=>{console.log(data)});  // => Get one
```

* As cli
```sh
> npm install -g laoyi

// used by ly/laoyi [options][content]

> ly 捞得一
  Get one
  
> laoyi lao
  老
```

## License

MIT © [oGsLP](oGsLP.github.io)


[npm-image]: https://badge.fury.io/js/laoyi.svg
[npm-url]: https://npmjs.org/package/laoyi
[travis-image]: https://travis-ci.com/oGsLP/laoyi.svg?branch=master
[travis-url]: https://travis-ci.com/oGsLP/laoyi
[daviddm-image]: https://david-dm.org/oGsLP/laoyi.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/oGsLP/laoyi
[coveralls-image]: https://coveralls.io/repos/oGsLP/laoyi/badge.svg
[coveralls-url]: https://coveralls.io/r/oGsLP/laoyi
