import api from '@/api'

export default {
  fetchAccountUsers ({ commit }) {
    commit('setAccountUsersLoading', true)
    return api.account.getAccountUsers().then(response => {
      commit('setAccountUsers', response.data.list)
    }).then(() => commit('setAccountUsersLoading', false))
  },
  fetchAddUser ({ commit }, requestData) {
    commit('setUserAddLoading', true)
    return api.account.addUserToAccount(requestData).then(() => commit('setUserAddLoading', false))
  },
  fetchUserInfo ({ commit }, requestData) {
    commit('setUserInfoLoading', true)
    return api.account.getUserInfo(requestData).then((response) => {
      commit('setUserInfo', response.data.user)
      commit('setUserInfoLoading', false)
    })
  }
}
