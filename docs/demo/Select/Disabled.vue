<script setup>
import { ref } from 'vue'
import Select from '@/components/Select/Select.vue'

const value = ref('')
const options = [
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' },
  { label: '选项3', value: 'option3' }
]
</script>

<template>
  <Select
    v-model="value"
    :options="options"
    disabled
    placeholder="请选择"
  />
</template> 