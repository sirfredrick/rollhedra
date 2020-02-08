<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item to="/roll/platonic">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/learn/about">
          <v-list-item-action>
            <v-icon>mdi-library-books</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Learn</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-switch v-model="isDark" @change="update" hide-details inset label="Dark Mode"></v-switch>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app class="deep-purple accent-2" dark hide-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon x-large>{{`$logo`}}</v-icon>
      <v-toolbar-title>Rollhedra</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <router-view name="tabs"></router-view>
      </template>
    </v-app-bar>
    <router-view></router-view>
    <v-footer class="deep-purple accent-2" app>
      <span class="white--text">
        &copy;
        <v-icon color="white">mdi-dice-d20</v-icon>
        <v-icon class="ml-n1" color="white">mdi-dice-d20</v-icon>
      </span>
      <span class="white--text">
        <p class="ml-1 my-2 body-1">Sirfredrick</p>
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: false,
    isDark: false
  }),
  methods: {
    update() {
      this.$vuetify.theme.dark = this.isDark;
      localStorage.setItem("isDark", JSON.stringify(this.isDark));
    }
  },
  mounted() {
    if (localStorage.getItem("isDark")) {
      this.isDark = JSON.parse(localStorage.getItem("isDark"));
      this.$vuetify.theme.dark = this.isDark;
    }
    localStorage.setItem("isDark", JSON.stringify(this.isDark));
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>