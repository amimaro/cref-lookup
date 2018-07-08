# cref-lookup [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Promise based CREF lookup

## Installation

```sh
$ npm install --save cref-lookup
```

## Usage

```js
const crefLookup = require('cref-lookup')

crefLookup.query({
    name: 'NAME',
    state: 'SS'
  })
  .then(
    res => {
      console.log(res)
    }
  )
  .catch(
    err => {
      console.error(err)
    }
  )

```
## License

MIT © [amimaro](amimaro.github.io)


[npm-image]: https://badge.fury.io/js/cref-lookup.svg
[npm-url]: https://npmjs.org/package/cref-lookup
[travis-image]: https://travis-ci.org/amimaro/cref-lookup.svg?branch=master
[travis-url]: https://travis-ci.org/amimaro/cref-lookup
[daviddm-image]: https://david-dm.org/amimaro/cref-lookup.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/amimaro/cref-lookup
