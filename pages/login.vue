<template>
  <section class="section">
    <h1 class="subtitle has-text-centered is-3">
      Вход
    </h1>

    <div class="columns is-centered mt-3">
      <div class="column is-half">
        <b-form @submit.prevent="">
          <!--
          <validation-provider
            v-slot="{ errors }"
            rules="required|email"
          >
          -->
          <b-field
            label="E-mail *"
            label-position="on-border"
          >
            <b-input
              v-model="user.email"
              min="8"
              required
              type="email"
            />
          </b-field>
          <!--
          </validation-provider>
          -->
          <b-field
            class="mt-4"
            label="Пароль *"
            label-position="on-border"
          >
            <b-input
              v-model="user.password"
              min="8"
              required
              type="password"
            />
          </b-field>

          <b-button
            class="mt-4 is-medium is-fullwidth"
            size="is-default"
            text
            type="is-info"
            @click="loginUser"
          >
            Войти
          </b-button>
        </b-form>
      </div>
    </div>
  </section>
</template>

<script>
// import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
  name: 'Login.vue',
  components: {
    // ValidationObserver,
    // ValidationProvider,
  },
  layout: 'login',
  props: ['submitForm'],
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await this.$auth.loginWith('local', { data: this.login });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>

</style>
