<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="green">
        <strong class="subheading"
          >Get planting with us on social networks!</strong
        >
        <v-btn v-for="icon in icons" :key="icon" class="ml-10" dark icon>
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