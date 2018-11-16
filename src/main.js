// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import wechatAuth from './plugins/wechatAuth'//微信登录插件
const qs= require('qs');

// plugins
import Plugin from './plugins'
Plugin(Vue)

Vue.use(iView);
Vue.use(wechatAuth, {appid: 'wx10d987813c45e959'});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
