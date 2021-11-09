<template>
  <div class="d-flex flex-column">
    <user-info-block :data="getUserInfoData"/>
    <user-info-table :data="getUserInfo.snapshots" class="mt-5"/>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import UserInfoBlock from '@/components/User/UserInfoBlock'
import UserInfoTable from '@/components/User/UserInfoTable'

export default {
  name: 'User',
  components: {
    UserInfoTable,
    UserInfoBlock
  },
  data () {
    return {
      limit: 10
    }
  },
  computed: {
    ...mapGetters('account', ['getUserInfo', 'isUserInfoLoading']),
    getUserInfoData () {
      const { snapshots, ...data } = this.getUserInfo
      return data
    }
  },
  methods: {
    ...mapActions('account', ['fetchUserInfo']),
    ...mapMutations('account', ['setUserInfo'])
  },
  mounted () {
    this.fetchUserInfo({
      username: this.$route.params.username,
      limit: this.limit
    })
  },
  beforeDestroy () {
    this.setUserInfo({})
  }
}
</script>
