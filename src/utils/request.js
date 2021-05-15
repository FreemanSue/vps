import HttpRequest from './axios'
import config from '@/config'

// 下一行的意思是： 如果当前的 node 环境是开发环境，则取 dev 的 ，如果不是开发环境，就取 pro
// 并设置初始 根路径 baseUrl
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const axios = new HttpRequest(baseUrl)

export default axios
