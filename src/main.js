import Vue from 'vue'
import App from './App.vue'

import ElMenu from './components/layout/ElMenu'
Vue.component('ElMenu', ElMenu)

new Vue({
  render: r => r(App)
}).$mount('#app')
