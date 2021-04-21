<template>
  <div class="is-fullheight fullheight">
    <VueHeader></VueHeader>


    <container class="columns sidebar-layout" style="min-height: 120%; margin: 0">

      <section class="sidebar-config sidebar-layout">
        <b-sidebar
            class=""
            position="static"
            :expand-on-hover=true
            mobile="reduce"
            :fullheight=true
            type="is-white"
            open
        >

          <ul class="menu-list">
            <li class="u-menu-item"
                v-for="(item, key) of items"
                :key="key"
            >
              <nuxt-link
                  :to="item.to"
                  exact-active-class="is-active"
              >
                <b-icon :icon="item.icon" /> {{ item.title }}
              </nuxt-link>
            </li>
          </ul>

        </b-sidebar>
      </section>

      <div class="p-1   column is-10 main-content" style="position:static; overflow: scroll">
        <nuxt />

      </div>
    </container>
  </div>
</template>

<script>
import VueHeader from "@/components/VueHeader";
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        },
        {
          title: 'Test',
          icon: 'account',
          to: { name: 'test' }
        }
      ]
    }
  }
}
</script>
