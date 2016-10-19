# My Portfolio
[![Build Status](https://travis-ci.org/xiaofan2406/portfolio.svg?branch=master)](https://travis-ci.org/xiaofan2406/portfolio) [![dependencies Status](https://david-dm.org/xiaofan2406/portfolio/status.svg)](https://david-dm.org/xiaofan2406/portfolio) [![devDependencies Status](https://david-dm.org/xiaofan2406/portfolio/dev-status.svg)](https://david-dm.org/xiaofan2406/portfolio?type=dev)


### Get Started
- Install dependencies
```
npm i
```

- Run dev server
```
npm run dev
```

- Build for production (build only, no server setup)
```
npm run build
```


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
