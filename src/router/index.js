import Vue from 'vue'
import Layout from '@/layout'
import Index from '@/views/index'
import VueRouter from 'vue-router'
import { title } from '@/settings'

import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Index',
        component: Index,
        meta: { title: '首页' }
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    children: [
      {
        path: '',
        name: 'About',
        redirect: 'profile',
        meta: { title: '企业简介' },
        component: () => import('@/views/about'),
        children: [
          {
            path: 'profile',
            name: 'AboutProfile',
            meta: { title: '公司概况' },
            component: () => import('@/views/about/profile')
          },
          {
            path: 'history',
            name: 'AboutHistory',
            meta: { title: '发展历程' },
            component: () => import('@/views/about/history')
          },
          {
            path: 'honor',
            name: 'AboutHonor',
            meta: { title: '资质荣誉' },
            component: () => import('@/views/about/honor')
          },
          {
            path: 'culture',
            name: 'AboutCulture',
            meta: { title: '品牌文化' },
            component: () => import('@/views/about/culture')
          },
          {
            path: 'team',
            name: 'AboutTeam',
            meta: { title: '师资团队' },
            component: () => import('@/views/about/team')
          }
        ]
      }
    ]
  },
  {
    path: '/service',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Service',
        meta: { title: '产品与服务' },
        component: () => import('@/views/service')
      },
      {
        path: 'lyjgt',
        name: 'ServiceLyjgt',
        meta: { title: '老岳讲感统' },
        component: () => import('@/views/service/lyjgt')
      },
      {
        path: 'dmhc',
        name: 'ServiceDmhc',
        meta: { title: '动漫火车感统' },
        component: () => import('@/views/service/dmhc')
      }
    ]
  },
  {
    path: '/duty',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Duty',
        redirect: 'love',
        meta: { title: '社会责任' },
        component: () => import('@/views/duty'),
        children: [
          {
            path: 'love',
            name: 'DutyLove',
            meta: { title: '《爱的守望》公益行' },
            component: () => import('@/views/duty/love')
          },
          {
            path: 'talk',
            name: 'DutyTalk',
            meta: { title: '老岳的1000场讲座' },
            component: () => import('@/views/duty/talk')
          },
          {
            path: 'tour',
            name: 'DutyTour',
            meta: { title: '老岳的三尺讲台' },
            component: () => import('@/views/duty/tour')
          }
        ]
      }
    ]
  },
  {
    path: '/join',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Join',
        meta: { title: '商学院' },
        component: () => import('@/views/join')
      }
    ]
  },
  {
    path: '/media',
    component: Layout,
    children: [
      {
        path: 'detail/:id',
        name: 'MediaArticle',
        component: () => import('@/views/media/article')
      },
      {
        path: '',
        name: 'Media',
        redirect: 'news',
        meta: { title: ' 媒体中心' },
        component: () => import('@/views/media'),
        children: [
          {
            path: 'news',
            name: 'MediaNews',
            meta: { title: '公司动态' },
            component: () => import('@/views/media/news')
          },
          {
            path: 'media',
            name: 'MediaMedia',
            meta: { title: '媒体报道' },
            component: () => import('@/views/media/media')
          },
          {
            path: 'video',
            name: 'MediaVideo',
            meta: { title: '视频专区' },
            component: () => import('@/views/media/video')
          },
          {
            path: 'party',
            name: 'MediaParty',
            meta: { title: '党建专栏' },
            component: () => import('@/views/media/party')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({ mode: 'history', routes, scrollBehavior: () => ({ y: 0 }), linkActiveClass: 'active' })

router.beforeEach((to, from, next) => {
  if (to.path === '/service/qyhs') {
    next({ name: 'Service', params: { from: 'qyhs' }})
  } else {
    NProgress.start()
    document.title = `${to.meta.title ? to.meta.title + '-' : ''}${title}`
    next()
  }
})

router.afterEach(NProgress.done)

export default router
