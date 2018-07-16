import NotificationList from '@/pages/news/components/NotificationList'
import CompanyNewsList from '@/pages/news/components/CompanyNewsList'
import IndustryNewsList from '@/pages/news/components/IndustryNewsList'
import NewsDetail from '@/pages/news/components/NewsDetail'

export default {
  routes: [
    {
      path: 'notification',
      name: 'news-notification',
      component: NotificationList
    },
    {
      path: 'company',
      name: 'news-company',
      component: CompanyNewsList
    },
    {
      path: 'industry',
      name: 'news-industry',
      component: IndustryNewsList
    },
    {
      path: ':category/:id',
      name: 'news-detail',
      component: NewsDetail
    }
  ]
}
