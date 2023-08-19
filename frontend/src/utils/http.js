import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:3000/admin/api',
    timeout: 5000
})

// 请求拦截器
http.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))


// 响应拦截器
http.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})

export default http

