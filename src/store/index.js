import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    up: false,
    top: 0
  },
  mutations: {
    UP(state, up) {
      state.up = up
    },
    TOP(state, top) {
      state.top = top
    }
  },
  actions: {
  },
  modules: {
  }
})
