<script setup>
import Icon from '@/components/Icon/Icon.vue'
</script>

<template>
  <div class="demo-container">
    <div class="demo-section">
      <h4>预定义颜色</h4>
      <div class="demo-row">
        <Icon icon="star" type="primary" size="2x" />
        <Icon icon="star" type="success" size="2x" />
        <Icon icon="star" type="warning" size="2x" />
        <Icon icon="star" type="danger" size="2x" />
        <Icon icon="star" type="info" size="2x" />
      </div>
    </div>
    
    <div class="demo-section">
      <h4>自定义颜色</h4>
      <div class="demo-row">
        <Icon icon="heart" color="#ff6b6b" size="2x" />
        <Icon icon="heart" color="#4ecdc4" size="2x" />
        <Icon icon="heart" color="#45b7d1" size="2x" />
        <Icon icon="heart" color="#96ceb4" size="2x" />
        <Icon icon="heart" color="#feca57" size="2x" />
        <Icon icon="heart" color="#ff9ff3" size="2x" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.demo-section h4 {
  margin: 0 0 12px 0;
  font-size: 16px;
  color: #333;
}
.demo-row {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}
</style> 