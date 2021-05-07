<template>
  <div class="is-fullheight fullheight">
    <VueHeader />

    <div
      class="columns sidebar-layout"
      style="min-height: 120%; margin: 0"
    >
      <section class="sidebar-config sidebar-layout">
        <b-sidebar
          :expand-on-hover="true"
          :fullheight="true"
          class=""
          mobile="reduce"
          open
          position="static"
          type="is-white"
        >
          <ul class="menu-list">
            <li
              v-for="(item, key) of items"
              :key="key"
              class="u-menu-item"
            >
              <nuxt-link
                :to="item.to"
                exact-active-class="is-active"
              >
                <b-icon :icon="item.icon" />
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </b-sidebar>
      </section>

      <div
        class="p-1   column is-10 main-content"
        style="position:static; overflow: scroll"
      >
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' },
        },
        {
          title: 'Test',
          icon: 'account',
          to: { name: 'test' },
        },
      ],
    };
  },
};
</script>
