import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aboutus: 0,
    flag: [true, false, false, false, false, false, false]
  },
  mutations: {
    getAbout (state, num) {
      state.aboutus = num
    },
    getflag (state, arr) {
      state.flag = arr
    }
  },
  actions: {
  },
  modules: {
  }
})
