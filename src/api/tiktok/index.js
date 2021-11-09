import request from '../request'

export default {
  getTiktokUsersByUsername (requestData) {
    return request({
      method: 'GET',
      url: '/api/tiktok/users',
      params: {
        ...requestData
      }
    })
  }
}
