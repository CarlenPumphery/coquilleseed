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
            <v-container>
              <v-row align="center" justify="center">
                  <v-col md="6">
                    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCoquilleValleySeedCommunity%2Fposts%2F3851415994897932&width=500&show_text=true&appId=2442171006088508&height=347"
                            height="347" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay;
                            clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                  </v-col>

                <v-col md="6">
                  <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCoquilleValleySeedCommunity%2Fposts%2F3826736394032559&width=500&show_text=true&appId=2442171006088508&height=347"
                          height="347" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay;
                          clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                  </v-col>

                    <v-col md="6">
                      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCoquilleValleySeedCommunity%2Fposts%2F3452146411491561&width=500&show_text=true&appId=2442171006088508&height=347"
                              height="347" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay;
                              clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </v-col>

                    <v-col md="6">
                      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCoquilleValleySeedCommunity%2Fposts%2F2930570983649109&width=500&show_text=true&appId=2442171006088508&height=398"
                              height="398" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay;
                              clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      </v-col>

                      <v-col md="6">
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCoquilleValleySeedCommunity%2Fposts%2F3701088599930673&width=500&show_text=true&appId=2442171006088508&height=507"
                                height="507" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
                                allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </v-col>

                        <v-col md="6">
                          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCoquilleValleySeedCommunity%2Fposts%2F3518232248216310&width=500&show_text=true&appId=2442171006088508&height=506"
                                  style="border:none;overflow:hidden" scrolling="no" frameborder="0"
                                  allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </v-col>
              </v-row>
            </v-container>
          <img class="home-img" src="../assets/videos.jpeg">
          </div>

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

          <v-container>
            <v-row class="links">
              <v-col md="6">
                <v-btn
                    class="links"
                    color="primary"
                    dark
                    block
                    x-large
                    href="https://coquillecommunitygarden.org/"
                    target="_blank"
                >Coquille Community Garden</v-btn>
              </v-col>
              <v-col md="6">
                <v-btn
                    class="links"
                    color="success"
                    dark
                    block
                    x-large
                    href="https://coosheadfood.coop/"
                    target="_blank"
                >Coos Head Food Co-Op</v-btn>
              </v-col>
              <v-col md="6">
                <v-btn
                    class="links"
                    color="primary"
                    dark
                    block
                    x-large
                    href="https://www.adaptiveseeds.com/"
                    target="_blank"
                >Adaptive Seeds</v-btn>
              </v-col>
              <v-col md="6">
                <v-btn
                    class="links"
                    color="success"
                    dark
                    block
                    x-large
                    href="https://www.seedsavers.org/"
                    target="_blank"
                >Seed Savers Exchange</v-btn>
              </v-col>
              <v-col md="6">
                <v-btn
                    class="links"
                    color="primary"
                    dark
                    block
                    x-large
                    href="https://www.rareseeds.com/"
                    target="_blank"
                >Baker Creek Heirloom Seeds</v-btn>
              </v-col>
              <v-col md="6">
                <v-btn
                    class="links"
                    color="success"
                    dark
                    block
                    x-large
                    href="https://myrtleglenfarm.com/"
                    target="_blank"
                >Myrtle Glen Farm</v-btn>
              </v-col>
              <v-col md="6">
                <v-btn
                    class="links"
                    color="primary"
                    dark
                    block
                    x-large
                    href="https://www.southcoastgardenstarters.com"
                    target="_blank"
                >South Coast Garden Starters</v-btn>
              </v-col>
              <v-col md="6">
                <v-btn
                    class="links"
                    color="success"
                    dark
                    block
                    x-large
                    href="https://www.facebook.com/search/top?q=coquille%20valley%20seed%20community"
                    target="_blank"
                >Coquille Valley Seed Community FB</v-btn>
              </v-col>
            </v-row>
          </v-container>

          <img class="home-img" src="../assets/links.jpeg">





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
                      :lazy-src="`https://picsum.photos/10/6?image=${n * 10 + 10}`"
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
  }
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
  display:block;
  margin: 0;
  padding-bottom: -20px;
  padding-top: -20px;
}
.links {
  padding: 0px;
  font-size: 1.75vh;
  text-align: center;
}
</style>
