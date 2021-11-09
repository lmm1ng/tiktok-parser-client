<template>
  <component v-if="layout" :is="layout" :key="layout">
    <router-view :key="$route.fullPath"/>
  </component>
  <div v-else>
    <router-view/>
  </div>
</template>

<script>
import LoginLayout from '@/layouts/login/LoginLayout'
import MainLayout from '@/layouts/main/MainLayout'

export default {
  name: 'App',
  components: {
    LoginLayout,
    MainLayout
  },
  computed: {
    layout () {
      return this.$route.meta.layout
    }
  },
  data: () => ({
    //
  })
}
</script>

<style>
.vuetify-wrapper {
  height: 100%;
}
</style>
