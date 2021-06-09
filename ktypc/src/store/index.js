import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aboutus: 0
  },
  mutations: {
    getAbout (state, num) {
      state.aboutus = num
    }
  },
  actions: {
  },
  modules: {
  }
})
