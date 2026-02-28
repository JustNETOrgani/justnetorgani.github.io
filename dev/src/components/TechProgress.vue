<template>
  <el-col :span="6">
    <div class="grid-content ep-bg-purple" />
    <el-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="percentage"
      :color="colorComputed"
    >
      <span>{{ label }}</span>
    </el-progress>
  </el-col>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  color: {
    // allow string or function
    type: [String, Function],
    default: ''
  }
})

const colorComputed = computed(() => {
  if (typeof props.color === 'function') {
    return props.color(props.percentage)
  }
  return props.color || ''
})
</script>

<style scoped>
/* no additional styles at the moment */
</style>