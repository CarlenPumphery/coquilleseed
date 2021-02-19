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





          <div class="videos text-center">
            <h1 class="home-main-heading">Videos</h1>
            <h2 class="home-mission">
              Inspiring and equipping our community via video recordings.
            </h2>
            <v-container class="video-wrap">
              <v-row align="center" justify="center">
                <v-col md="6">
                  <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCoquilleValleySeedCommunity%2Fposts%2F3701088599930673&width=500&show_text=true&appId=2442171006088508&height=507"
                          height="507" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
                          allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </v-col>

                <v-col md="6">
                  <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCoquilleValleySeedCommunity%2Fposts%2F3518232248216310&width=500&show_text=true&appId=2442171006088508&height=506"
                          height="506" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
                          allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </v-col>
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
              </v-row>
            </v-container>
          </div>
          <img class="home-img" src="../assets/videos.jpeg">

          <div class="gallery text-center">
            <h1 class="home-main-heading">Gallery</h1>
            <h2 class="home-mission">
              Inspiring and equipping our community via artwork and photos.
            </h2>
            <div class="gallery-wrap">
              <div class="gallery-content">
                <img class="gallery-content" src="../assets/basket-sm.jpg" alt="basket">
              </div>
              <div class="gallery-content">
                <img class="gallery-content" src="../assets/sunchokes-sm.jpg" alt="sunchokes">
              </div>
              <div class="gallery-content">
                <img class="gallery-content" src="../assets/apple-sm.jpg" alt="apple">
              </div>
              <div class="gallery-content">
                <img class="gallery-content" src="../assets/peas-sm.jpg" alt="peas">
              </div>
              <div class="gallery-content">
                <img class="gallery-content" src="../assets/goats-sm.jpg" alt="goats">
              </div>
                <div class="gallery-content">
                  <img class="gallery-content" src="../assets/legends-sm.jpg" alt="legends">
                </div>
            </div>
          </div>
          <img class="home-img" src="../assets/gallery.jpeg">



          <div class="about text-center">
            <h1 class="home-main-heading">About</h1>
            <h2 class="about-text">
              "Our mission is to inspire and equip our community to grow and share seeds and plants to preserve a diverse gene pool for local food security."
            </h2>
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

          <div class="home-main-heading text-center">
            <h1 class="about-text">
              Support the mission of Coquille Valley Seed Community below!
            </h1>
          <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="LSGJ4EES6X486" />
            <input type="image"
                   src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                   border="0" width="200px" name="submit" title="PayPal - The safer, easier way to pay
                   online!" alt="Donate with PayPal button" />
            <img alt="" border="0"
                 src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
          </div>


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
.home-main-heading {
  font-family: "palatino", serif;
  font-size: 4vh;
  color: #79a604;
  padding-top: 5%;
}
.home-mission {
  font-style: oblique;
  font-size: 2.25vh;
}
.about-text {
  font-style: oblique;
  font-size: 4.25vh;
}
.home-text {
  font-size: 1vh;
  padding-bottom: 5%;
}
.video-wrap {
  padding-left: 20%;
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
.gallery-wrap {
  display: flex;
  flex-wrap: wrap;
}

.gallery-content {
  width: 385px;
  length: 385px;;
}
</style>
