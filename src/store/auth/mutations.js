import Cookies from 'js-cookie'

export default {
  setAccount (state, payload) {
    Cookies.set('token', payload.token)
    state.account = payload.account
  },
  setAuthLoading (state, payload) {
    state.isAuthLoading = payload
  },
  makeLogout () {
    Cookies.remove('token')
  }
}
