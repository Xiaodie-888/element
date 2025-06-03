<script setup>
import { createMessage } from '@/components/Message/method'
import Button from '@/components/Button/Button.vue'

const openMessage = (type) => {
  const messages = {
    info: '这是一条普通的提示信息',
    success: '恭喜，这是一条成功消息',
    warning: '警告，这是一条警告消息', 
    error: '错了哦，这是一条错误消息'
  }
  
  createMessage({
    message: messages[type],
    type: type
  })
}
</script>

<template>
  <div class="demo-message">
    <Button @click="openMessage('info')">信息</Button>
    <Button @click="openMessage('success')" type="success">成功</Button>
    <Button @click="openMessage('warning')" type="warning">警告</Button>
    <Button @click="openMessage('error')" type="danger">错误</Button>
  </div>
</template>

<style scoped>
.demo-message button {
  margin-right: 10px;
}
</style> 