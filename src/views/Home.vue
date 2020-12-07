<template>
  <div class="main">
    <div class="home">
        <v-container class="my-5">
          <v-layout row>
            <v-flex xs12 justify-center>
              <img
                class="home-img img-top"
                alt="Coquille Flyby"
                src="../assets/cvsc-flyby.jpg"
              />
            </v-flex>
            <div class="home-content-wrap text-center">
              <h1 class="home-main-heading">
               Welcome to the Coquille Valley Seed Community!
             </h1>
             <div class="home-text text-center">
                <h2 class="home-mission">
                  "Our mission is to inspire and equip our community to grow and
                 share seeds and plants."
               </h2>
             </div>
            </div>
            <img class="home-img" src="../assets/home.jpeg"/></v-layout>

          <div class="articles text-center home-main-heading">
            <h1>Articles</h1>
          </div>

          <div class="gallery text-center home-main-heading">
            <h1>Gallery</h1>
            <v-row>
              <v-col
                  v-for="n in 9"
                  :key="n"
                  class="d-flex child-flex"
                  cols="4"
              >
                <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                      <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </div>

          <div class="videos text-center home-main-heading">
            <h1>Videos</h1>

          </div>

          <div class="links text-center home-main-heading">
            <h1>Links</h1>
          </div>

          <div class="about text-center home-main-heading">
            <h1>About</h1>
          </div>

        </v-container>
     </div>


  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped lang="scss">
.img-top {
  padding-top: 2%;
}
.home-img {
  width: 100%;
  display: block;
}
.home-main-heading {
  font-family: "palatino", serif;
  font-size: 4vh;
  color: #79a604;
}
.home-mission {
  font-style: oblique;
  font-size: 2.25vh;
}
.home-text {
  font-size: 1vh;
  padding-bottom: 5%;
}
</style>
