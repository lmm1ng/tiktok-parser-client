import request from '../request'

export default {
  login (requestData) {
    return request({
      method: 'POST',
      url: '/api/auth/login',
      data: {
        ...requestData
      }
    })
  },
  register (requestData) {
    return request({
      method: 'POST',
      url: '/api/auth/registration',
      data: {
        ...requestData
      }
    })
  }
}
