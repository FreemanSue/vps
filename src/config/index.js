
const isDev = process.env.NODE_ENV === 'development'

export default {
  baseUrl: {
    dev: 'http://45.77.76.85:3000'
  },
  publicPath: [/^\/public/]
}