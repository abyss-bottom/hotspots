<script>
import Header from "./components/Header.vue";
import HotTopicLayout from "./pager/HotspotLayout.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {Footer, HotTopicLayout, Header}
}
</script>

<template>
  <div>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style scoped>

</style>