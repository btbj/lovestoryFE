import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Register from '@/pages/register'
import PrePay from '@/pages/register/PrePay'
import Home from '@/pages/home'
import AboutUs from '@/pages/aboutus'
import FindPartner from '@/pages/findpartner'
import ServiceIntro from '@/pages/serviceIntro'
import Plans from '@/pages/plans'
import UserInfo from '@/pages/userInfo'
import LoveStory from '@/pages/lovestory'
import News from '@/pages/news'
import NewsInfo from '@/pages/news/newsinfo'
import MyInfo from '@/pages/myInfo'

import AboutUsSubRoute from './sub/aboutus'
import NewsSubRoute from './sub/news'
import MyinfoSubRoute from './sub/myinfo'
import PlanList from '@/pages/plans/components/PlanList'
import PlanDetail from '@/pages/plans/components/PlanDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/register/prepay',
      name: 'prepay',
      component: PrePay
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      redirect: '/aboutus/company',
      component: AboutUs,
      children: AboutUsSubRoute.routes
    },
    {
      path: '/findpartner',
      name: 'findpartner',
      component: FindPartner
    },
    {
      path: '/user/:id',
      name: 'userinfo',
      component: UserInfo
    },
    {
      path: '/lovestory',
      name: 'lovestory',
      component: LoveStory
    },
    {
      path: '/serviceintro',
      name: 'serviceintro',
      component: ServiceIntro
    },
    {
      path: '/plans',
      redirect: '/plans/list',
      component: Plans,
      children: [
        {
          path: 'list',
          name: 'plans',
          component: PlanList
        },
        {
          path: 'detail/:id',
          name: 'plans-detail',
          component: PlanDetail
        }
      ]
    },
    {
      path: '/news',
      name: 'news',
      redirect: '/news/notification',
      component: News,
      children: NewsSubRoute.routes
    },
    {
      path: '/news/newsinfo',
      name: 'newsinfo',
      component: NewsInfo
    },
    {
      path: '/myinfo',
      name: 'myinfo',
      redirect: '/myinfo/personalCenter',
      component: MyInfo,
      children: MyinfoSubRoute.routes
    }
  ]
})
