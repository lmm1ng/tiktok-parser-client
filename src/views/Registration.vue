<template>
  <div class="login-wrapper">
    <v-row justify="center">
      <v-col sm="10" md="6" lg="3">
        <v-card class="pa-4" min-width="400">
          <v-card-title class="justify-center">Регистрация</v-card-title>
          <v-form v-model="isFormValid" @submit.prevent="onRegistration">
            <v-text-field v-model="form.email" :rules="emailRules" label="E-mail"/>
            <v-text-field v-model="form.password" :rules="passwordRules" type="password" counter label="Пароль"/>
            <v-text-field v-model="form.repeatPassword" :rules="repeatPasswordRules" type="password" counter
                          label="Повторите пароль"/>
            <div class="text-center">
              <v-btn text block @click="$router.push('/login')">Уже зарегистрировны?</v-btn>
              <v-btn class="mt-2" type="submit" color="primary" block :loading="isAuthLoading">Зарегистрироваться</v-btn>
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
  name: 'Registration',
  data () {
    return {
      form: {
        email: '',
        password: '',
        repeatPassword: ''
      },
      isFormValid: false,
      emailRules: [
        v => !!v || 'Введите E-mail',
        v => /.+@.+\..+/.test(v) || 'Введите корректный E-mail'
      ],
      passwordRules: [
        v => !!v || 'Введите пароль',
        v => (v && v.length >= 3) || 'Пароль должен быть больше 3 символов'
      ],
      repeatPasswordRules: [
        v => !!v || 'Введите пароль',
        v => (v && v === this.form.password) || 'Пароли не совпадают'
      ]
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthLoading'])
  },
  methods: {
    ...mapActions('auth', ['fetchRegister']),
    onRegistration () {
      if (this.isFormValid) {
        this.fetchRegister({
          email: this.form.email,
          password: this.form.password
        }).then(() => this.$router.push('/login'))
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
