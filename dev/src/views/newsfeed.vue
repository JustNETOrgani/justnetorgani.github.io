<script setup>
import { ref } from 'vue'

const loading = ref(true)

const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
</script>

<template>
    <main class="service-page">
        <h2>News flash</h2>
        <!-- <div v-loading="loading"
          element-loading-text="Loading..."
          :element-loading-spinner="svg"
          element-loading-svg-view-box="-10, -10, 50, 50"
          element-loading-background="rgba(122, 122, 122, 0.8)">
        </div> -->
        <div>
          <p>New article accepted for publication</p><br>
          <p>Title: Blockchain-assisted Sharing of Electronic Health Records: A Feasible Privacy-centric Constant-size Ring Signature Framework</p> <br>
          <p>Journal: International Journal of Computers and Applications</p>
        </div>
        
    </main>
</template>

<style lang="scss" scoped>
h2 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
  