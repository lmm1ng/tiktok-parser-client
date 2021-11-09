export default {
  setAccountUsers (state, payload) {
    state.accountUsers = payload
  },
  setUserAddLoading (state, payload) {
    state.isUserAddLoading = payload
  },
  setUserInfo (state, payload) {
    state.userInfo = payload
  },
  setUserInfoLoading (state, payload) {
    state.isUserInfoLoading = payload
  },
  setAccountUsersLoading (state, payload) {
    state.isAccountUsersLoading = payload
  }
}
