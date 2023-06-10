import Vue from 'vue'
import App from './App.vue'

import 'lib-flexible' // 移动端适配 (目录: hello-world/src/main.js)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
