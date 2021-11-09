<template>
  <v-card class="pa-4 d-flex">
    <div>
      <v-img width="300" height="300" :src="data.avatar"/>
      <div class="text-h5">{{ `@${data.uniqueId}` }}</div>
      <div>{{ data.nickname }}</div>
    </div>
    <div class="user-info__indicators">
    </div>
  </v-card>
</template>
<script>
export default {
  name: 'UserInfo',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
