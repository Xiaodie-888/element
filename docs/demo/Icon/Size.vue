<script setup>
import Icon from '@/components/Icon/Icon.vue'
</script>

<template>
  <div class="demo-container">
    <div class="demo-row">
      <span>Extra Small:</span>
      <Icon icon="star" size="xs" />
    </div>
    <div class="demo-row">
      <span>Small:</span>
      <Icon icon="star" size="sm" />
    </div>
    <div class="demo-row">
      <span>Normal:</span>
      <Icon icon="star" size="1x" />
    </div>
    <div class="demo-row">
      <span>Large:</span>
      <Icon icon="star" size="lg" />
    </div>
    <div class="demo-row">
      <span>Extra Large:</span>
      <Icon icon="star" size="xl" />
    </div>
    <div class="demo-row">
      <span>2x:</span>
      <Icon icon="star" size="2x" />
    </div>
    <div class="demo-row">
      <span>3x:</span>
      <Icon icon="star" size="3x" />
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.demo-row {
  display: flex;
  align-items: center;
  gap: 16px;
}
.demo-row span {
  min-width: 120px;
  font-size: 14px;
  color: #666;
}
</style> 