<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="green">
        <strong class="subheading"
          >Members, come plant with us <br>on social networks!</strong
        >

        <v-btn v-for="icon in icons" :key="icon" class="ml-10 display" light icon
               :href="`https://www.facebook.com/groups/713176172791524`"
               >
          <v-icon size="36px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} —
        <strong>Coquille Valley Seed Community</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook'
    ],
  }),
}
</script>