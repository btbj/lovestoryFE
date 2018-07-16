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
import EconomicStrength from '@/pages/myInfo/myDetail/modules/EconomicStrength'
import LifeStyle from '@/pages/myInfo/myDetail/modules/LifeStyle'
import WorkStudy from '@/pages/myInfo/myDetail/modules/WorkStudy'
import Appearance from '@/pages/myInfo/myDetail/modules/Appearance'
import MarriageConcept from '@/pages/myInfo/myDetail/modules/MarriageConcept'
import Hobby from '@/pages/myInfo/myDetail/modules/Hobby'

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
      redirect: '/myinfo/myDetail/economic',
      component: MyDetail,
      children: [
        {
          path: 'economic',
          name: 'myinfo-mydetail-economic',
          component: EconomicStrength
        },
        {
          path: 'life',
          name: 'myinfo-mydetail-life',
          component: LifeStyle
        },
        {
          path: 'work',
          name: 'myinfo-mydetail-work',
          component: WorkStudy
        },
        {
          path: 'appearance',
          name: 'myinfo-mydetail-appearance',
          component: Appearance
        },
        {
          path: 'marriage',
          name: 'myinfo-mydetail-marriage',
          component: MarriageConcept
        },
        {
          path: 'hobby',
          name: 'myinfo-mydetail-hobby',
          component: Hobby
        }
      ]
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
