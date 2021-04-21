export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'pyat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/vee-validate.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vee-validate/dist/rules"],
  },
  axios: {
    baseURL: 'http://httpbin.org',
    //baseURL: 'http://localhost:3000'
  },
//TODO fix urls and endpoints
  auth: {
    strategies: {
      local: {
          endpoints: {
            //TODO fix endpoints
            //login: { url: '/auth/login', method: 'post', propertyName: 'token'},
            login: { url: '/bearer', method: 'get', propertyName: 'token'},
            logout: { url: '/auth/logout', method: 'post'},
            user: { url: '/auth/user', method: 'get', propertyName: 'user'}
          },
        tokenType: 'bearer',
      }
    }
  },

  toast: {
    position: 'top-center',
    iconPack: 'fontawesome',
    duration: 3000,
    register: [
      {
        name: 'defaultSuccess',
        message: (payload) =>
          !payload.msg ? 'Вы были зарегестрированы!' : payload.msg,
        options: {
          type: 'success',
          icon: 'check'
        }
      },
      {
        name: 'defaultError',
        message: (payload) =>
          !payload.msg ? 'Что-то пошло не так. Попробуйте позже' : payload.msg,
        options: {
          type: 'error',
          icon: 'times'
        }
      }
    ]
  }
}

