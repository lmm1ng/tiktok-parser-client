import Users from '@/views/Account/Users'
import User from '@/views/Account/User'
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
  },
  {
    path: '/user/:username',
    component: User,
    name: 'User',
    beforeEnter: isAuthorized,
    meta: {
      layout: 'main-layout'
    }
  }
]
