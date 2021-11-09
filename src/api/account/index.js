import request from '../request'

export default {
  getAccountUsers () {
    return request({
      method: 'GET',
      url: '/api/account/users'
    })
  },
  addUserToAccount (requestData) {
    return request({
      method: 'POST',
      url: '/api/account/users',
      data: {
        ...requestData
      }
    })
  }
}
