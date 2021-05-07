<template>
  <section class="section">
    <h1 class="subtitle has-text-centered is-3">
      Регистрация
    </h1>

    <!--TODO add VeeValidate -->

    <div class="columns mt-1">
      <!-- First column -->
      <div class="column is-half is-offset-one-quarter">
        <form>
          <b-field
            label="E-mail *"
            label-position="on-border"
          >
            <b-input
              v-model="register_user.email"
              min="8"
              required
              type="email"
            />
          </b-field>

          <b-field
            label="Пароль *"
            label-position="on-border"
          >
            <b-input
              v-model="register_user.password"
              min="8"
              password-reveal
              required
              type="password"
            >
              >
            </b-input>
          </b-field>

          <b-field
            label="Фамилия *"
            label-position="on-border"
          >
            <b-input
              v-model="register_user.second_name"
              min="1"
              required
            >
              pattern="[A-Za-zА-Яа-яЁё]*"
              validation-message="Только русские и английские буквы">
            </b-input>
          </b-field>

          <b-field
            label="Имя *"
            label-position="on-border"
          >
            <b-input
              v-model="register_user.first_name"
              min="2"
              required
            >
              pattern="[A-Za-zА-Яа-яЁё]*"
              validation-message="Только русские и английские буквы">
            </b-input>
          </b-field>

          <b-field
            label="Отчество"
            label-position="on-border"
          >
            <b-input
              v-model="register_user.patronymic"
              min="2"
              required
            >
              pattern="[A-Za-zА-Яа-яЁё]*"
              validation-message="Только русские и английские буквы">
            </b-input>
          </b-field>

          <b-button
            class="column is-medium is-fullwidth"
            size="is-default"
            text
            type="is-info"
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
  name: 'Register.vue',
  layout: 'login',
  data() {
    return {
      register_user: {
        email: '',
        password: '',
        first_name: '',
        patronymic: '',
        second_name: '',
      },
    };
  },
  methods: {
    // async registerUser(register_user) {
    //   await this.$axios.post('', register_user);
    // },
  },
};

</script>

<style scoped>

</style>
