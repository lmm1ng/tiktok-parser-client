import api from '@/api'

export default {
  fetchAccountUsers ({ commit }) {
    return api.account.getAccountUsers().then(response => {
      commit('setAccountUsers', response.data.list)
    })
  },
  fetchAddUser ({ commit }, requestData) {
    commit('setUserAddLoading', true)
    return api.account.addUserToAccount(requestData).then(() => commit('setUserAddLoading', false))
  }
}
