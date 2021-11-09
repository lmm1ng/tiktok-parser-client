import api from '@/api'

export default {
  fetchTiktokUsersByUsername ({ commit }, requestData) {
    commit('setTiktokUsersLoading', true)
    return api.tiktok.getTiktokUsersByUsername(requestData).then(response => {
      commit('setTiktokUsers', response.data.list)
    }).then(() => commit('setTiktokUsersLoading', false))
  }
}
