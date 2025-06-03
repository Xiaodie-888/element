<script setup>
import { ref } from 'vue'
import Input from '@/components/Input/Input.vue'

const value = ref('')
</script>

<template>
  <Input v-model="value" disabled placeholder="请输入内容" />
</template> 