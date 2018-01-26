// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vui from './vui'
import './vui/asserts/stylesheets/vui.scss'
// 仅rem模式引入 默认值 375, 于scss中$vmuiDesignSketchWidth保持一致
// require('./vui/asserts/javascripts/rem')()
Vue.use(Vui)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
