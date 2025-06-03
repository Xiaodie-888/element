<script setup>
import Icon from '@/components/Icon/Icon.vue'
</script>

<template>
  <div class="demo-container">
    <div class="demo-section">
      <h4>旋转动画</h4>
      <div class="demo-row">
        <div class="demo-item">
          <Icon icon="spinner" spin size="2x" type="primary" />
          <span>spin</span>
        </div>
        <div class="demo-item">
          <Icon icon="cog" spin size="2x" type="success" />
          <span>spin</span>
        </div>
      </div>
    </div>
    
    <div class="demo-section">
      <h4>其他动画</h4>
      <div class="demo-row">
        <div class="demo-item">
          <Icon icon="heart" pulse size="2x" type="danger" />
          <span>pulse</span>
        </div>
        <div class="demo-item">
          <Icon icon="bell" shake size="2x" type="warning" />
          <span>shake</span>
        </div>
        <div class="demo-item">
          <Icon icon="star" bounce size="2x" type="info" />
          <span>bounce</span>
        </div>
        <div class="demo-item">
          <Icon icon="sun" beat size="2x" type="warning" />
          <span>beat</span>
        </div>
      </div>
    </div>
    
    <div class="demo-section">
      <h4>旋转角度</h4>
      <div class="demo-row">
        <div class="demo-item">
          <Icon icon="shield" size="2x" />
          <span>0°</span>
        </div>
        <div class="demo-item">
          <Icon icon="shield" :rotation="90" size="2x" />
          <span>90°</span>
        </div>
        <div class="demo-item">
          <Icon icon="shield" :rotation="180" size="2x" />
          <span>180°</span>
        </div>
        <div class="demo-item">
          <Icon icon="shield" :rotation="270" size="2x" />
          <span>270°</span>
        </div>
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
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
}
.demo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.demo-item span {
  font-size: 12px;
  color: #666;
}
</style> 