import api from '@/api'

export default {
  fetchLogin ({ commit }, requestData) {
    commit('setAuthLoading', true)
    return api.auth.login(requestData).then(response => {
      commit('setAccount', response.data)
      commit('setAuthLoading', false)
    })
  },
  fetchRegister ({ commit }, requestData) {
    commit('setAuthLoading', true)
    return api.auth.register(requestData).then(() => commit('setAuthLoading', false))
  },
  makeLogout ({ commit }) {
    commit('makeLogout')
  }
}
