<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="green">
        <strong class="subheading"
          >Get planting with us on social networks!</strong
        >

        <p class="member-blurb">Not a Facebook group member yet? Check us out here:</p>
        <v-btn v-for="icon in icons" :key="icon" class="ml-10" dark icon
               :href="`https://www.facebook.com/search/top?q=coquille%20valley%20seed%20community`"
        >
          <v-icon size="36px">
            {{ icon }}
          </v-icon>
        </v-btn>


        <p class="member-blurb">Members Facebook link:</p>
        <v-btn v-for="icon in icons" :key="icon" class="ml-10" light icon
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

<style scoped lang="scss">
.member-blurb {
  padding-left: 2%;
}
</style>