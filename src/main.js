import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import locale from 'element-ui/lib/locale/lang/en'
import App from './App'
import '@/styles/index.scss' // global css
import router from './router'
import store from './store'
import '@/icons' // icon
import '@/permission' // 权限

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render:h => h(App)
})
