import './filter'
import './prototype'
import './directive'
import G from './prototype/G'

Vue.mixin({
  created() {
    G.$route = this.$route
  },
  activated() {
    G.$route = this.$route
  }
})

export default {
  install() {
    // Vue 已定义为全局变量在 vue.config.js 中
  }
}
