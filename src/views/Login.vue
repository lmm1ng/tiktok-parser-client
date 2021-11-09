<template>
  <div class="login-wrapper">
    <v-row justify="center">
      <v-col sm="10" md="6" lg="3">
        <v-card class="pa-4" min-width="400">
          <v-card-title class="justify-center">Авторизация</v-card-title>
          <v-form v-model="isFormValid" @submit.prevent="onLogin">
            <v-text-field v-model="form.email" :rules="emailRules" label="E-mail"/>
            <v-text-field v-model="form.password" :rules="passwordRules" type="password" counter label="Пароль"/>
            <div class="text-center">
              <v-btn text block @click="$router.push('/registration')">Еще нет аккаунта?</v-btn>
              <v-btn class="mt-2" type="submit" color="primary" block :loading="isAuthLoading">Войти</v-btn>
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      isFormValid: false,
      emailRules: [
        v => !!v || 'Введите E-mail',
        v => /.+@.+\..+/.test(v) || 'Введите корректный E-mail'
      ],
      passwordRules: [
        v => !!v || 'Введите пароль',
        v => (v && v.length >= 3) || 'Пароль должен быть больше 3 символов'
      ]
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthLoading'])
  },
  methods: {
    ...mapActions('auth', ['fetchLogin']),
    onLogin () {
      if (this.isFormValid) {
        this.fetchLogin(this.form).then(() => this.$router.push('/'))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
