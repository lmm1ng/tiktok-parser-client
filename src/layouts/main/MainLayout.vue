<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-title class="text-h6">
          Tiktok App
        </v-list-item-title>
      </v-list-item>
      <v-divider/>
      <v-list-item v-for="item in sidebarItems" :key="item.title" link :to="item.href">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <v-main app>
      <v-container class="pa-10">
        <slot/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      sidebarItems: [
        {
          title: 'Пользователи',
          icon: 'mdi-account-search',
          href: '/users'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
