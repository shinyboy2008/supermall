import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入bootstrap
import './assets/bootstrap/dist/css/bootstrap.min.css'
import './assets/bootstrap/dist/js/bootstrap.bundle.min.js'
//网络
import './network/request'
//按需导入vant
import './vant'
//注册bus
Vue.prototype.$bus = new Vue()
//使用fastclick:解决移动端300ms的延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)
//图片懒加载
import VueLazyLoad from 'vue-lazyload'
import Axios from 'axios'
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})
Vue.config.productionTip = false

Vue.use('vant')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

