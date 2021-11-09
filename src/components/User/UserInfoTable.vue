<template>
  <v-data-table
    :headers="tableHeaders"
    :items="data"
    disable-sort
    disable-pagination
    disable-filtering
    hide-default-footer
    no-data-text="Для этого пользователя еще нет данных"
  />
</template>
<script>
export default {
  name: 'UserTable',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      tableHeaders: [
        {
          text: 'Видео',
          value: 'videoCount'
        },
        {
          text: 'Лайки',
          value: 'heartCount'
        },
        {
          text: 'Подписчики',
          value: 'followerCount'
        },
        {
          text: 'Подписки',
          value: 'followingCount'
        },
        {
          text: 'Дата',
          value: 'createdAt'
        }
      ]
    }
  }
}
</script>
