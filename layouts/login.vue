<template>
  <div>
    <VueHeader></VueHeader>
    <section class="main-content columns">

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import VueHeader from "~/components/VueHeader";
export default {
  name: "login.vue",
  components: {
    VueHeader,
    ValidationProvider}
}
</script>

<style scoped>

</style>
