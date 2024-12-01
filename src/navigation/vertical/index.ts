// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'mdi:home-outline'
    },
    {
      title: 'Tasks',
      path: '/tasks',
      icon: 'mdi:checkbox-marked-circle-outline'
    },
    {
      title: 'Connect Wallet',
      path: '/wallet/connect',
      icon: 'mdi:wallet-outline'
    }
  ]
}

export default navigation
