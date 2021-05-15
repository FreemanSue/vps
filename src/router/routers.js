import Home from '@/views/Home.vue'

export default {
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'index',
          component: () => import(/* webpackChunkName: 'index' */ '@/views/Index.vue')
        },
        {
          path: '/add',
          name: 'add',
          component: () => import('@/components/contents/Add.vue')
        },
        {
          path: '/detail',
          name: 'detail',
          component: () => import('@/components/contents/Detail.vue')
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: () => import(/* webpackChunkName: 'notfound' */ '@/views/NotFound.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
}