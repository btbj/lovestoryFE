import CompanyIntro from '@/pages/aboutus/components/CompanyIntro'
import OfficeEnv from '@/pages/aboutus/components/OfficeEnv'
import ContactMethods from '@/pages/aboutus/components/ContactMethods'

export default {
  routes: [
    {
      path: 'company',
      name: 'aboutus-companyintro',
      component: CompanyIntro
    },
    {
      path: 'env',
      name: 'aboutus-officeenv',
      component: OfficeEnv
    },
    {
      path: 'contact',
      name: 'aboutus-contactmethods',
      component: ContactMethods
    }
  ]
}
