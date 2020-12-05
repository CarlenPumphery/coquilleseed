<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dark elevate-on-scroll>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Coquille Valley SC</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/signin">
        <v-text>login</v-text>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon to="/signup">
        <v-text>signup</v-text>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            to="/construction"
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Lorem {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped></style>
