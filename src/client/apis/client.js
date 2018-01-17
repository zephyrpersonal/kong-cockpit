import axios from 'axios'

const client = axios.create({
  baseURL: '/kong'
})

client.interceptors.response.use(res => {
  return res.data
})

export default client
