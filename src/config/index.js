
const isDev = process.env.NODE_ENV === 'development'

export default {
  baseUrl: {
    dev: 'http://172.17.0.1:3000'
  },
  publicPath: [/^\/public/]
}