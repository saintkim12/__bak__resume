import Vue from 'vue'
import App from './App.vue'
// preset, plugin
import './components/layout'
import { Plugin as Fragment } from 'vue-fragment'

Vue.use(Fragment)
new Vue({
  render: r => r(App)
}).$mount('#app')
