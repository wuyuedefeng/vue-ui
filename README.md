# vui

> A Vue.js UI project

# install dependencies

> scss编译支持

```
$ npm install node-sass --save-dev
$ npm install sass-loader --save-dev
$ npm install sass-resources-loader --save-dev
```
需改build/utils.js 查找到
```
scss: generateLoaders('sass'),
```
替换为
```
scss: generateLoaders('sass').concat(
  {
    loader: 'sass-resources-loader',
    options: {
      resources: path.resolve(__dirname, '../src/assets/stylesheets/mixins/vuiVar.scss')
    }
  }
),
```
- 在 src/assets/stylesheets/mixins/vmuiVar.scss 中添加配置 [以下是默认值]
```
$vuiSupportRem: false;
// rem模式 该值应该和rem.js函数传递的值保持一致 
// [效果图如果是750 如果打算1px=1rem 需$vuiDesignSketchWidth和rem.js的传值为：750]
$vuiDesignSketchWidth: 375;
```
- 如果使用rem模式 在 `src/main.js` 导入rem.js
```
// 仅rem模式引入 默认值 375, 于scss中$vmuiDesignSketchWidth保持一致
require('./vui/asserts/javascripts/rem')(750)
```
rem模式 页面缩放比例： `scale = 1 / dpr`

