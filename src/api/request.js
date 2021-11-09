import axios from 'axios'
import root from '@/main'

axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  if (!response) return {}
  return response
}, (error) => {
  if (error.response.status === 401) {
    root.$store.dispatch('auth/makeLogout')
    root.$router.push('/login')
    return Promise.reject(error)
  }
  if (error.response.status >= 400) {
    return Promise.reject(error)
  }
})

export default function request ({
  method,
  url,
  data,
  params,
  headers = {},
  responseType = 'json'
}) {
  return axios({
    method,
    url,
    data,
    headers,
    params,
    responseType
  }).then((response = { data: {} }) => new Promise((resolve) => resolve(response)))
    .catch((err) => {
      if (axios.isCancel(err)) {
        throw new Error('Request canceled')
      } else {
        throw err
      }
    })
}
