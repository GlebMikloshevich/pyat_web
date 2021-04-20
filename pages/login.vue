<template>
  <section class="section">

    <h1 class="subtitle has-text-centered is-3">Вход</h1>



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
              label-position="on-border">

            <b-input
                v-model="user.email"
                type="email"
                min="8"
                required>
            </b-input>
          </b-field>
          <!--
          </validation-provider>
          -->
          <b-field
              label="Пароль *"
              label-position="on-border"
              class="mt-4">

            <b-input
                v-model="user.password"
                type="password"
                min="8"
                required>
            </b-input>
          </b-field>

          <b-button @click="loginUser" class="mt-4 is-medium is-fullwidth" type="is-info" size="is-default" text>Войти</b-button>
        </b-form>
      </div>
    </div>

  </section>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { BInputWithValidation } from "vee-validate";
export default {
  name: "login.vue",
  layout:"login",
  components:{
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider
  },
  data() {
    return {
      user: {
        username : '',
        password: ''
      }
    }
  },
  methods:{
    async loginUser() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  },
  props: ["submitForm"]
}
</script>

<style scoped>

</style>

