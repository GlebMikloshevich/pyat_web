<template>
  <v-form v-model="valid">
    <v-text-field
      v-if="hasName"
      v-model="userInfo.name"
      label="Name"
      :rules="[required('name')]"
    />
    <v-text-field
      v-model="userInfo.email"
      label="Email"
    />
    <!--:rules="[required('email'), emailFormat()]"-->

    <v-text-field
      v-model="userInfo.password"
      label="Password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      counter="true"
      @click:append="showPassword = !showPassword"
    />
    <!--:rules="[required('password'), minLength('password', 8)]"-->

    <v-btn
      :disabled="!valid"
      @click="submitForm(userInfo)"
    >
      {{ buttonText }}>
    </v-btn>
  </v-form>
</template>

<script>

export default {
  name: 'UserAuthForm',
  props: ['submitForm', 'buttonText', 'hasName'],
  data() {
    return {
      valid: false,
      showPassword: false,
      hasName: false,
      userInfo: {
        email: '',
        password: '',
      },
    };
  },
};

</script>

<style lang="scss" scoped>

</style>
