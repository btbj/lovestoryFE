import PersonalCenter from '@/pages/myInfo/personalCenter'
import BasicInfo from '@/pages/myInfo/basicInfo'
import MyIntro from '@/pages/myInfo/myIntro'
import MyPics from '@/pages/myInfo/myPics'
import MyDetail from '@/pages/myInfo/myDetail'
import MyOption from '@/pages/myInfo/myOption'
import ChangePwd from '@/pages/myInfo/myAccount'
import DatingRecords from '@/pages/myInfo/datingRecords'
import VisitorPage from '@/pages/myInfo/datingRecords/modules/VisitorPage'
import HistoryPage from '@/pages/myInfo/datingRecords/modules/HistoryPage'
import FollowerPage from '@/pages/myInfo/datingRecords/modules/FollowerPage'
import FollowingPage from '@/pages/myInfo/datingRecords/modules/FollowingPage'

export default {
  routes: [
    {
      path: '/myinfo/personalCenter',
      name: 'myinfo-personalCenter',
      component: PersonalCenter
    },
    {
      path: '/myinfo/basicInfo',
      name: 'myinfo-basicinfo',
      component: BasicInfo
    },
    {
      path: '/myinfo/myIntro',
      name: 'myinfo-myintro',
      component: MyIntro
    },
    {
      path: '/myinfo/myPics',
      name: 'myinfo-mypics',
      component: MyPics
    },
    {
      path: '/myinfo/myDetail',
      name: 'myinfo-mydetail',
      component: MyDetail
    },
    {
      path: '/myinfo/myOption',
      name: 'myinfo-myoption',
      component: MyOption
    },
    {
      path: '/myinfo/myAccount',
      name: 'myinfo-changepwd',
      component: ChangePwd
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
