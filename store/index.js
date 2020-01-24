import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import profile from './modules/profile'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  namespaced: true,
  modules: {
    user,
    profile
  }
}
)

export default store
