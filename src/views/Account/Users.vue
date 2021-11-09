<template>
  <div class="users-wrapper" v-if="!isAccountUsersLoading">
    <v-dialog v-model="isAddUserModal" width="500" @click:outside="onDialogClose">
      <v-card width="500" class="pa-4" :loading="isUserAddLoading">
        <v-card-title>Добавление пользователя</v-card-title>
        <v-form @submit.prevent="onUserFind">
          <v-text-field label="Имя пользователя" v-model="findUserInputValue"/>
          <v-btn color="primary" block type="submit" :loading="isTiktokUsersLoading">Найти</v-btn>
        </v-form>
        <div v-if="getTiktokUsers">
          <v-card class="my-2" v-for="tiktokUser in getTiktokUsers" :key="tiktokUser.userId"
                  @click="addUser(tiktokUser.uniqueId)" :disabled="isUserAddLoading">
            <v-card-title>
              {{ tiktokUser.nickname }}
            </v-card-title>
            <v-card-subtitle>
              {{ `@${tiktokUser.uniqueId}` }}
            </v-card-subtitle>
          </v-card>
        </div>
      </v-card>
    </v-dialog>
    <v-card v-for="user in getAccountUsers" :key="user.userId" @click="onUserCard(user.uniqueId)" width="400"
            height="300" elevation="6">
      <v-card-title>
        {{ `${user.nickname}` }}
      </v-card-title>
      <v-card-subtitle>
        {{ `@${user.uniqueId}` }}
      </v-card-subtitle>
      <v-img width="100" :src="user.avatar"/>
      <v-card-text>
        <div class="d-flex justify-space-around">
        <span>
            <v-icon color="blue">mdi-account-group</v-icon>
            <span class="ml-2">{{ getLastSnapshotData(user, 'followerCount') }}</span>
          </span>
          <span>
            <v-icon color="green">mdi-account-supervisor-circle</v-icon>
            <span class="ml-2">{{ getLastSnapshotData(user, 'followingCount') }}</span>
          </span>
          <span>
            <v-icon color="black">mdi-video</v-icon>
            <span class="ml-2">{{ getLastSnapshotData(user, 'videoCount') }}</span>
          </span>
          <span>
            <v-icon color="red">mdi-cards-heart</v-icon>
            <span class="ml-2">{{ getLastSnapshotData(user, 'heartCount') }}</span>
          </span>
        </div>
        <span class="d-block mt-3">{{ `(${getLastSnapshotData(user, 'createdAt')})` }}</span>
      </v-card-text>
    </v-card>
    <v-card width="400" height="300" class="d-flex align-center justify-center" @click="setDialogVision(true)">
      <v-icon x-large>mdi-plus-thick</v-icon>
    </v-card>
  </div>
  <v-overlay v-else :value="isAccountUsersLoading">
    <v-progress-circular
      indeterminate
      size="64"
    ></v-progress-circular>
  </v-overlay>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Users',
  data () {
    return {
      isAddUserModal: false,
      findUserInputValue: ''
    }
  },
  computed: {
    ...mapGetters('account', ['getAccountUsers', 'isUserAddLoading', 'isAccountUsersLoading']),
    ...mapGetters('tiktok', ['getTiktokUsers', 'isTiktokUsersLoading'])
  },
  methods: {
    ...mapActions('account', ['fetchAccountUsers', 'fetchAddUser']),
    ...mapActions('tiktok', ['fetchTiktokUsersByUsername']),
    ...mapMutations('tiktok', ['setTiktokUsers']),
    getLastSnapshotData (user, field) {
      return user.snapshots.length ? user.snapshots[0][field] : '?'
    },
    onUserFind () {
      this.fetchTiktokUsersByUsername({
        username: this.findUserInputValue,
        limit: 5
      })
    },
    addUser (username) {
      this.fetchAddUser({ username }).then(() => this.setDialogVision(false)).then(() => this.fetchAccountUsers())
    },
    onDialogClose () {
      this.setTiktokUsers([])
    },
    setDialogVision (value) {
      this.isAddUserModal = value
    },
    onUserCard (username) {
      this.$router.push({
        name: 'User',
        params: { username }
      })
    }
  },
  mounted () {
    this.fetchAccountUsers()
  }
}
</script>
<style lang="scss" scoped>
.users-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-around;
}
</style>
