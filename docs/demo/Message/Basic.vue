<script setup>
import { createMessage } from '@/components/Message/method'
import Button from '@/components/Button/Button.vue'

const openMessage = () => {
  createMessage({
    message: '这是一条消息提示',
    type: 'info'
  })
}
</script>

<template>
  <Button @click="openMessage">显示消息</Button>
</template> 