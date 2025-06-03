<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>

<template>
  <div class="demo-tooltip">
    <div class="row">
      <Tooltip content="这是一段内容" placement="top">
        <Button>上方显示</Button>
      </Tooltip>
    </div>
    
    <div class="row">
      <Tooltip content="这是一段内容" placement="left">
        <Button>左侧显示</Button>
      </Tooltip>
      
      <Tooltip content="这是一段内容" placement="right">
        <Button>右侧显示</Button>
      </Tooltip>
    </div>
    
    <div class="row">
      <Tooltip content="这是一段内容" placement="bottom">
        <Button>下方显示</Button>
      </Tooltip>
    </div>
  </div>
</template>

<style scoped>
.demo-tooltip {
  text-align: center;
}

.row {
  margin: 20px 0;
}

.row button {
  margin: 0 10px;
}
</style> 