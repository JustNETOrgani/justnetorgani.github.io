<template>
  <div class="section-header">
    <el-icon v-if="icon">
      <component :is="icon" />
    </el-icon>
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: Object,
    default: null
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.section-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.section-header h2 {
  margin: 0;
  font-size: 1.5rem;
}
</style>