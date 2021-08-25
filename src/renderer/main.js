import Vue from 'vue'
import axios from 'axios'
import Antd from 'ant-design-vue';
import App from './App'
import router from './router'
import store from './store'
import * as filters from '@/utils/filter'
import '@/assets/svg';
import 'ant-design-vue/dist/antd.css';
import '@/style/reset.css'
import '@/utils/autoRegisterComponent'

Vue.use(Antd);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// 设置过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
