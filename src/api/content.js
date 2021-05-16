import axios from '@/utils/request'
import qs from 'qs'
// import store from '@/store/index'


//  读取文章列表
//  @param {Object} options 读取文章列表接口参数
// 属于接口
const getList = (options) => {
  //  qs 的作用是：将传递的参数转换成变量的形式，然后拼接到 get(url 后面)
  return axios.get('/public/list?' + qs.stringify(options))
}

// 图片上传接口
// const uploadImg = (formData) => axios.post('/content/upload', formData)

// 发贴接口
const addPost = (data) => axios.post('/content/add', { ...data })

// 获取文章详情
const getDetail = (data) => {
  
  return axios.get('/public/content/detail?' + qs.stringify(data) )
}

export {
  getList,
  // uploadImg,
  addPost,
  getDetail
}
