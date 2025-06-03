<script setup>
import { h } from 'vue'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'

const options = [
  { key: 1, label: '菜单项 1' },
  { key: 2, label: '菜单项 2' },
  { key: 3, label: '菜单项 3' }
]
</script>

<template>
  <Dropdown :menu-options="options">
    <Button>下拉菜单</Button>
  </Dropdown>
</template> 