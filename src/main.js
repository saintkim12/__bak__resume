import Vue from 'vue'
import App from './App.vue'
// preset, plugin
import './components/layout'

new Vue({
  render: r => r(App)
}).$mount('#app')
