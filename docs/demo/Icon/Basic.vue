<script setup>
import Icon from '@/components/Icon/Icon.vue'
</script>

<template>
  <div class="demo-row">
    <Icon icon="home" />
    <Icon icon="user" />
    <Icon icon="star" />
    <Icon icon="heart" />
    <Icon icon="bell" />
    <Icon icon="search" />
    <Icon icon="settings" />
    <Icon icon="camera" />
  </div>
</template>

<style scoped>
.demo-row {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}
.demo-row .vk-icon {
  font-size: 20px;
}
</style> 