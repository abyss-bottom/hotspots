<script>
export default {
  name: "Header",
  data() {
    return {
      title: "今日热点",
      description: "汇聚全网热点，热门一览无余"
    }
  }
}

</script>

<template>
  <div class="root flex justify-between p-5 bg-black">
    <!--logo-->
    <div class="flex content-center ms-3">
      <img class="w-11 h-11" src="../../public/logo.png" alt="">
      <div class="flex flex-col ms-3">
        <span class="text-xl font-bold text-slate-100">{{ title }}</span>
        <span class="text-xs text-slate-400">{{ description }}</span>
      </div>
    </div>
    <!--time-->
    <div>

    </div>
    <!--option-->
    <div>

    </div>
  </div>
</template>

<style scoped>
.root {
  cursor: pointer;
}
</style>