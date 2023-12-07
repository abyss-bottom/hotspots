<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import HotTopicLayout from "./pager/HotspotLayout.vue";

import {Apis} from "./apis/apis.js";

export default {
  name: "App",
  components: {Footer, HotTopicLayout, Header},
  data() {
    return {
      ks: {}
    }
  },
  methods: {},
  mounted() {
    Apis.getInstance().hotspotInfo("ks")
        .then(r => {
          this.ks = r
        }).catch(e => {

    })
  }
}
</script>

<template>
  <div>
    <Header/>
    <div>
      <p>热点</p>
      <div v-for="hot in ks">
        <span>{{ hot.title }}</span>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>

</style>