<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in routes"
          :key="i"
          :to="{name: item.name}"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-toolbar-side-icon class="nav-button" fixed @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import router from './router'

export default {
  data () {
    return {
      drawer: false,
      route: [],
      miniVariant: false
    }
  },
  mounted () {
  },
  computed: {
    routes: () => {
      return router.options.routes.map(({name, meta: {title}}) => {
        return {
          icon: 'bubble_chart',
          title,
          name
        }
      })
    }
  },
  name: 'App'
}
</script>

<style lang="stylus">
  @import './common/reset.css'
  @import './common/font.css'
  html
    @media all and (orientation: landscape)
      font-size 1px !important

    @media all and (orientation: portrait)
      font-size 3px !important
  .nav-button
    z-index 5
</style>
