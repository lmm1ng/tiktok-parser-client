import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import account from './account'
import tiktok from './tiktok'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    account,
    tiktok
  }
})
