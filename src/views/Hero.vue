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
              >Inspire and equip your community...Share seeds.</v-btn
            >
          </div>
        </v-flex>
        <div class="hero">

        </div>
        <img class="hero-image" src="../assets/hero.jpeg" height="2812" width="5000"/>
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
  font-size: 4em;
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
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: .75em;
}
@media (min-width: 1920px) {
  .hero-btn {
    font-size: 1.25em;
  }
}
@media (min-width: 2560px) {
  .hero-btn {
    font-size: 2em;
  }
}
</style>
