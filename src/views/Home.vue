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
                 share seeds and plants..."
               </h2>
             </div>
            </div>
            <img class="home-img" src="../assets/home.jpeg"/></v-layout>

          <div class="articles text-center">
            <h1 class="home-main-heading">Articles</h1>
            <h2 class="home-mission">
              Inspiring and equipping our community via the written word.
            </h2>
            <img class="article-img" src="../assets/articles.jpeg">
          </div>



          <div class="videos text-center">
            <h1 class="home-main-heading">Videos</h1>
            <h2 class="home-mission">
              Inspiring and equipping our community via video recordings.
            </h2>
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
          <img class="home-img" src="../assets/videos.jpeg">

          <div class="about text-center">
            <h1 class="home-main-heading">About</h1>
            <h2 class="home-mission">
              "Our mission is to inspire and equip our community to grow and share seeds and plants to preserve a diverse gene pool for local food security."
            </h2>
              <v-carousel
                  cycle
                  height="800"
                  hide-delimiter-background
                  show-arrows-on-hover
              >
                <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
                >
                  <v-sheet
                      :color="colors[i]"
                      height="100%"
                  >
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                    >
                      <div class="display-3">
                        {{ slide }} Board Member
                      </div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            <img class="home-img" src="../assets/about.jpeg">
          </div>

          <div class="links text-center">
            <h1 class="home-main-heading">Links</h1>
          </div>
          <div class="my-2">
            <v-btn
                class="links"
                x-large
                color="primary"
                dark
                href="https://coquillecommunitygarden.org/"
            >Coquille Community Garden</v-btn>
            <v-btn
                class="links"
                x-large
                color="success"
                dark
                href="https://coosheadfood.coop/"
            >Coos Head Food Co-Op</v-btn>
            <v-btn
                class="links"
                x-large
                color="primary"
                dark
                href="https://www.adaptiveseeds.com/"
            >Adaptive Seeds</v-btn>
            <v-btn
                class="links"
                x-large
                color="success"
                dark
                href="https://www.seedsavers.org/"
            >Seed Savers</v-btn>
            <v-btn
                class="links"
                x-large
                color="primary"
                dark
                href="https://www.rareseeds.com/"
            >Rare Seeds</v-btn>
            <v-btn
                class="links"
                x-large
                color="success"
                dark
                href="https://myrtleglenfarm.com/"
            >Myrtle Glen Farm</v-btn>
            <v-btn
                class="links"
                x-large
                color="primary"
                dark
                href="https://www.southcoastgardenstarters.com"
            >South Coast Garden Starters</v-btn>


            <img class="home-img" src="../assets/links.jpeg">
          </div>


          <div class="gallery text-center">
            <h1 class="home-main-heading">Gallery</h1>
            <h2 class="home-mission">
              Inspiring and equipping our community via artwork and photos.
            </h2>
            <v-row>
              <v-col
                  v-for="n in 9"
                  :key="n"
                  class="d-flex child-flex"
                  cols="4"
              >
                <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 10 + 3}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 10- + 3}`"
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
        </v-container>
     </div>


  </div>
</template>

<script>
  export default {
  data () {
  return {
  colors: [
  'indigo',
  'warning',
  'pink darken-2',
  'red lighten-1',
  'deep-purple accent-4',
      'green',
      'blue'
  ],
  slides: [
  'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth',
    'Sixth',
      'Seventh',
  ],
}
},
}
</script>

<style scoped lang="scss">
.img-top {
  padding-top: 2%;
}
.home-img {
  width: 100%;
  display: block;
}
.article-img {
  width: 60%;
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
.links {
  font-size: x-large;
  display: block;
  margin-bottom: 3%;
}
</style>
