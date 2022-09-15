<script>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
export default {
  components: { NavBar, FooterBar },
  created() {
    console.log(this.$route.path)
  }
}
</script>

<template>
  <NavBar />
  <RouterView />
  <FooterBar />
</template>
