<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import HotTopicLayout from "./pager/HotspotLayout.vue";

import {Apis} from "./apis/apis.js";
import HotspotView from "./components/HotspotView.vue";

export default {
  name: "App",
  components: {HotspotView, Footer, HotTopicLayout, Header},
  data() {
    return {
      platforms: {}
    }
  },
  methods: {},
  mounted() {
    Apis.getInstance().hotspotPlatforms()
        .then(r => {
          this.platforms = r
        }).catch(e => {

    })
  }
}
</script>

<template>
  <div class="relative">
    <Header class="sticky top-0"/>
    <div>
      <div class="container flex justify-center mx-auto p-4">
        <div v-for="platform in platforms">
          <HotspotView class="m-3" :platform="platform"/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>

</style>