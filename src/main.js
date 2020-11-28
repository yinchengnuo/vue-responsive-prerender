import Vue from 'vue'
import Vant from 'vant'
import App from './App.vue'
import store from './store'
import Plugin from '@/plugin'
import router from './router'
import ElementUI from 'element-ui'
import { slider, slideritem } from 'vue-concise-slider'

import 'vant/lib/index.css'
import 'nprogress/nprogress.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/element-variables.scss'

Vue.use(Vant)
Vue.use(Plugin)
Vue.use(ElementUI)
Vue.component('slider', slider)
Vue.component('slideritem', slideritem)

Vue.config.productionTip = false

setTimeout(() => {
  // window.scrollTo(0, 12345)
}, 123)

Vue.prototype.$event = new Vue()
Vue.prototype.$d = function(join) {
  Vue.prototype.$event.$emit('dialog', join)
}

new Vue({
  router,
  store,
  mounted() {
    document.dispatchEvent(new Event('vue-mounted'))
  },
  render: h => h(App)
}).$mount('#app')
