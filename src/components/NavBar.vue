<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dark elevate-on-scroll>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>CV Seed Community</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/signin">
        <v-text>login</v-text>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon to="/signup">
        <v-text>signup</v-text>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped></style>
