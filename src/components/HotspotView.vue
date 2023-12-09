<script>
import {Apis} from "../apis/apis.js";

export default {
  name: "HotspotView",
  props: {
    platform: String
  },
  data() {
    return {
      hotspotInfo: {}
    }
  },
  methods: {},
  mounted() {
    Apis.getInstance().hotspotInfo(this.platform).then(r => {
      this.hotspotInfo = r
    }).catch(e => {

    })
  }
}
</script>

<template>
  <div class="root p-4 rounded-xl border">
    <!--平台信息-->
    <div class="flex items-center pb-2">
      <div class="p-4 bg-slate-50"></div>
      <p class="ms-2">{{ platform }}</p>
    </div>

    <!--热点列表-->
    <div class="mt-1" v-for="(item,index) in hotspotInfo">
      <div class="flex items-center">
        <div class="w-6 h-6 border rounded-md text-xs text-center">{{ index + 1 }}</div>
        <a class="text-sm ms-4 truncate "
           :href="item.link"
           target="_blank">{{ item.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>