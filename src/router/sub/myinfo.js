import BasicInfo from '@/pages/myInfo/basicInfo'
import DatingRecords from '@/pages/myInfo/datingRecords'
import VisitorPage from '@/pages/myInfo/datingRecords/modules/VisitorPage'
import HistoryPage from '@/pages/myInfo/datingRecords/modules/HistoryPage'
import FollowerPage from '@/pages/myInfo/datingRecords/modules/FollowerPage'
import FollowingPage from '@/pages/myInfo/datingRecords/modules/FollowingPage'

export default {
  routes: [
    {
      path: '/myinfo/basicInfo',
      name: 'myinfo-basicinfo',
      component: BasicInfo
    },
    {
      path: '/myinfo/datingRecords',
      name: 'myinfo-datingrecords',
      redirect: '/myinfo/datingRecords/visitor',
      component: DatingRecords,
      children: [
        {
          path: 'visitor',
          name: 'myinfo-datingrecords-visitor',
          component: VisitorPage
        },
        {
          path: 'history',
          name: 'myinfo-datingrecords-history',
          component: HistoryPage
        },
        {
          path: 'follower',
          name: 'myinfo-datingrecords-follower',
          component: FollowerPage
        },
        {
          path: 'following',
          name: 'myinfo-datingrecords-following',
          component: FollowingPage
        }
      ]
    }
  ]
}
