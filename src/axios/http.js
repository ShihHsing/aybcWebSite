import axios from 'axios'
import Qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000

/* -------------- 区分内外网 ---------------- */

axios.defaults.baseURL = 'http://www.aybc.so/aybcadmin/Website/'

/* ------------------------------------------ */
// axios.defaults.withCredentials = true

// 请求前对数据做处理
axios.defaults.transformRequest = [function (data) {
  // 依自己的需求对请求数据进行处理
  return Qs.stringify(data, { arrayFormat: 'indices' })
}]
// 添加一个请求拦截器
axios.interceptors.request.use(
  config => {
    // 在请求发送之前做一些事
    return config
  },
  error => {
    // 当出现请求错误是做一些事
    return Promise.reject(error)
  }
)

// 添加一个返回拦截器
axios.interceptors.response.use(
  response => {
    // 在请求发送之前做一些事
    return response
  },
  error => {
    // 当出现请求错误是做一些事
    return Promise.reject(error)   // 返回接口返回的错误信息
  }
)

export default axios
