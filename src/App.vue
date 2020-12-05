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
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
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
