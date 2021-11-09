import { dateConverter } from '@/utils/date'

export default {
  getAccountUsers: state => state.accountUsers.map(user => ({
    ...user,
    snapshots: user.snapshots.map(el => ({
      ...el,
      createdAt: dateConverter(el.createdAt)
    }))
  })),
  isUserAddLoading: state => state.isUserAddLoading,
  getUserInfo: state => {
    if (Object.keys(state.userInfo).length) {
      return ({
        ...state.userInfo,
        snapshots: state.userInfo.snapshots.map(el => ({
          ...el,
          createdAt: dateConverter(el.createdAt)
        }))
      })
    }
    return ({})
  },
  isUserInfoLoading: state => state.isUserInfoLoading,
  isAccountUsersLoading: state => state.isAccountUsersLoading
}
