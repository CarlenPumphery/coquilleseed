<template>
  <v-app>
    <div class="routing" v-if="this.$route.path !=='/'">
      <NavBar />
    </div>
    <v-content>
      <router-view></router-view>
    </v-content>
    <div class="routing" v-if="this.$route.path !=='/'">
      <Footer />
    </div>
  </v-app>
</template>

<script>
import NavBar from "../../lpdoula/lpdoula/src/components/NavBar";
import Footer from "../../lpdoula/lpdoula/src/components/Footer";
export default {
  name: "App",
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      //
    };
  }
};
</script>
