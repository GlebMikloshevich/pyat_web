<template>
  <div>
    <nav
      class="navbar has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="~assets/buefy.png"
            alt="Buefy"
            height="28"
          >
        </a>
        <!--TODO add user-->
      </div>

      <div class="navbar-item navbar-end">
        <div v-if="$auth.loggedIn">
          {{ $auth.user.name }}
          <b-button
            type="menu_button"
            text
          >
            Logout
          </b-button>
        </div>
        <div v-else>
          <b-button
            class="mr-2 menu_button"
            type="is-text"
            tag="nuxt-link"
            size="is-default"
            text
            to="/login"
          >
            Login
          </b-button>

          <b-button
            class="mr-4 "
            type="is-text"
            tag="nuxt-link"
            size="is-default"
            text
            to="/register"
          >
            Register
          </b-button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>

</style>
