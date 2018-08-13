<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" enable-resize-watcher fixed app light>
      <v-toolbar>
        <img src="./assets/garagista.svg" height="50px">
        <v-toolbar-title>
          <span>Garagista</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i" router :to="item.link">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-autocomplete
        v-model="select"
        flat
        label="Quick search"
        solo-inverted
        ></v-autocomplete>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: true,
      items: [
        { icon: 'dashboard', title: 'Dashboard', link: '/' },
        { icon: 'directions_car', title: 'Cars', link: 'vehicle' },
        { icon: 'directions_car', title: 'Setup', link: 'setup' }
      ],
      title: 'Garagista'
    }
  },
  name: 'App'
}
</script>
