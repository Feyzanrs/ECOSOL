// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'bx:home-circle',
    },
    {
      title: 'Görevler',
      path: '/tasks',
      icon: 'bx:task',
    },
    {
      title: 'Second Page',
      path: '/second-page',
      icon: 'bx:envelope',
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'bx:shield',
    }
  ]
}

export default navigation
