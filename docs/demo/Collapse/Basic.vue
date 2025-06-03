<script setup>
import { ref } from 'vue'
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'

const activeNames = ref(['item1'])
</script>

<template>
  <Collapse v-model="activeNames">
    <CollapseItem name="item1" title="折叠面板 1">
      <div>这是第一个面板的内容。</div>
    </CollapseItem>
    <CollapseItem name="item2" title="折叠面板 2">
      <div>这是第二个面板的内容。</div>
    </CollapseItem>
  </Collapse>
</template> 