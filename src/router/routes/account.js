import Users from '@/views/Account/Users'
import { isAuthorized } from '@/router/hooks/auth'

export default [
  {
    path: '/users',
    component: Users,
    name: 'Users',
    beforeEnter: isAuthorized,
    meta: {
      layout: 'main-layout'
    }
  }
]
