<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="green">
        <strong class="subheading"
          >Get planting with us on social networks!</strong
        >

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">
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
  name: "Footer"
};
</script>
