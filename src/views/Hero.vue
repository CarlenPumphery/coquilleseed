<template>
  <div class="hero">
    <v-container class="my-5" fill-height>
      <v-layout align-center justify-center row>
        <v-flex class="text-center">
          <h1 class="hero-title">
            Coquille Valley <span class="community">Seed Community</span>
          </h1>
          <div class="text-center hero-div">
            <v-btn
              to="/home"
              elevation="12"
              block
              x-large
              rounded
              class="deep-purple white--text hero-btn"
              >Inspire and Equip your community...Share seeds.</v-btn
            >
          </div>
        </v-flex>

        <img alt="Hero image" class="hero-image" src="src/assets/hero.jpeg" />
        <v-flex xs12 lg6> </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Hero",
  components: {}
};
</script>

<style scoped lang="scss">
.hero-image {
  width: 150%;
  height: 150%;
}
.hero-title {
  font-family: "palatino", serif;
  font-size: 5vh;
  padding-top: 1%;
  color: #79a604;
  display: block;
}
.community {
  color: #512f07;
}

.hero-div {
  padding-top: 10%;
}
.hero-btn {
  padding: 20px;
}
.hero-link {
  text-decoration: none;
  color: white;
  font-size: x-large;
}
</style>
