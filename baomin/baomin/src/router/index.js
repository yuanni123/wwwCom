import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsCenter from '../views/NewsCenter.vue'
import HomePage from '../views/HomePage.vue'
import SchoolOverview from '../views/SchoolOverview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/school-overview',
    name: 'SchoolOverview',
    component: SchoolOverview
  },
  // 修改教学教研路由，指向TeachingAndResearch文件夹
  {
    path: '/teaching',
    name: 'TeachingPage',
    component: () => import('../TeachingAndResearch/TeachingPage.vue')
  },
  // 添加德育之窗路由
  {
    path: '/moral-education',
    name: 'MoralEducation',
    component: () => import('../views/MoralEducationPage.vue')
  },
  {
    path: '/culture',
    name: 'CulturePage',
    component: () => import('../views/CulturePage.vue')
  },
  {
    path: '/admission',
    name: 'AdmissionPage',
    component: () => import('../views/AdmissionPage.vue')
  },
  {
    path: '/recruitment',
    name: 'Recruitment',
    component: () => import('../views/RecruitmentPage.vue')
  },
  // 添加联系我们页面的路由
  {
    path: '/contact',
    name: 'ContactUs',
    component: () => import('../views/ContactUsPage.vue')
  },
  // 在routes数组中添加
  {
    path: '/news-center',
    name: 'NewsCenter',
    component: NewsCenter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router