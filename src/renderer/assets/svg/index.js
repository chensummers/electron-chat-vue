import Vue from 'vue'
// 引入svg组件
import iconSvg from '@/components/IconSvg.vue'
// 全局注册icon-svg
Vue.component('icon-svg', iconSvg)

// 自动加载icon
const req = require.context('./svg', false, /\.svg$/)
req.keys().map(req)
