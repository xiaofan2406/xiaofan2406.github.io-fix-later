# My Portfolio
[![Build Status](https://travis-ci.org/xiaofan2406/xiaofan2406.github.io.svg?branch=master)](https://travis-ci.org/xiaofan2406/xiaofan2406.github.io) [![dependencies Status](https://david-dm.org/xiaofan2406/xiaofan2406.github.io/status.svg)](https://david-dm.org/xiaofan2406/xiaofan2406.github.io) [![devDependencies Status](https://david-dm.org/xiaofan2406/xiaofan2406.github.io/dev-status.svg)](https://david-dm.org/xiaofan2406/xiaofan2406.github.io?type=dev)


### Scripts
- Install dependencies
```
npm i
```

- Run dev server
```
npm run dev
```

- Push built files to github.io
```
npm run live
```


### Routing
- Because of using GitHub pages, has no control over server side routing. As a result, using hash to route.
- All sections live in `/` route, for easy migration on other hosts 


### Details
- ##### CSS
using [`ExtractTextPlugin`](https://github.com/webpack/extract-text-webpack-plugin) to combine all css files into one

- ##### CSS Modules
NOT enabled

- ##### PostCSS
using [`cssnext`](http://cssnext.io/) and [`postcss-import`](https://github.com/postcss/postcss-import)

- ##### Hot Module Replacement
using [`react-hot-loader`](https://github.com/gaearon/react-hot-loader/tree/next)

- ##### Test production build
  ```
  npm i -g pushstate-server
  pushstate-server ./build 9000
  ```
