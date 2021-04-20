<template>
  <section class="section">

    <h1 class="subtitle has-text-centered is-3">Регистрация</h1>

    <!--TODO add VeeValidate -->

    <div class="columns mt-1">
      <!-- First column -->
      <div class="column is-half is-offset-one-quarter">

        <form>
          <b-field label="E-mail *"
                   label-position="on-border">
            <b-input
                type="email"
                min="8"
                required
                v-model="register_user.email">
            </b-input>
          </b-field>

          <b-field label="Пароль *"
                   label-position="on-border">
            <b-input
                type="password"
                password-reveal
                min="8"
                required
                v-model="register_user.password">>
            </b-input>
          </b-field>

          <b-field label="Фамилия *"
                   label-position="on-border">
            <b-input
                min="1"
                required
                v-model="register_user.second_name">
              pattern="[A-Za-zА-Яа-яЁё]*"
              validation-message="Только русские и английские буквы">
            </b-input>
          </b-field>

          <b-field label="Имя *"
                   label-position="on-border">
            <b-input
                min="2"
                required
                v-model="register_user.first_name">
              pattern="[A-Za-zА-Яа-яЁё]*"
              validation-message="Только русские и английские буквы">
            </b-input>
          </b-field>

          <b-field label="Отчество"
                   label-position="on-border">
            <b-input
                min="2"
                required
                v-model="register_user.patronymic">
              pattern="[A-Za-zА-Яа-яЁё]*"
              validation-message="Только русские и английские буквы">
            </b-input>

          </b-field>




          <b-button
              class="column is-medium is-fullwidth"
              type="is-info"
              size="is-default"
              text
          >
            Зарегестрироваться
          </b-button>

        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "register.vue",
  layout: "login",
  data() {
    return {
      register_user: {
        email : '',
        password: '',
        first_name: '',
        patronymic: '',
        second_name: ''
      }
    }
  },
  methods: {
    async registerUser(register_user){
      await this.$axios.post('', register_user)

    }
  }
}

</script>

<style scoped>

</style>
