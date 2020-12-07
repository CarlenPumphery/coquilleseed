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

          <div class="articles text-center">
            <h1 class="home-main-heading">Articles</h1>
          </div>
          <img class="home-img" src="../assets/articles.jpeg">

          <div class="gallery text-center">
            <h1 class="home-main-heading">Gallery</h1>
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
          <img class="home-img" src="../assets/gallery.jpeg">
          <div class="videos text-center">
            <h1 class="home-main-heading">Videos</h1>
            <v-row
                justify="space-between">
                <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fseedsaversx%2Fvideos%2F167227751777454%2F&show_text=false&width=560" width="560"
                        height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;
                    web-share"></iframe>
                <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fseedsaversx%2Fvideos%2F284604039647857%2F&show_text=false&width=560" width="560"
                        height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;
                    web-share"></iframe>
                <iframe width="560" height="314" src="https://www.youtube.com/embed/fqgtSPkUGKQ" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                    picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="314" src="https://www.youtube.com/embed/X-ZXPFvsCXI" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                    picture-in-picture" allowfullscreen></iframe>
                <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fseedsaversx%2Fvideos%2F293652548408612%2F&show_text=false&width=560" width="560"
                        height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;
                    web-share" ></iframe>
                <iframe
                    src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Ffindyozen%2Fvideos%2F3030239960343674%2F&show_text=false&width=560" width="560"
                    height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
                    allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;
                    web-share"></iframe>
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
            </v-row>

          </div>

          <div class="links text-center">
            <h1 class="home-main-heading">Links</h1>
          </div>

          <div class="about text-center">
            <h1 class="home-main-heading">About</h1>
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
iframe {
  padding-bottom: 2%;
}
</style>
