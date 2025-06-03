---
title: Message | V-Element
description: Message 组件的文档
---

# Message 消息提示

常用于主动操作后的反馈提示。

## 基础用法

从顶部出现，3 秒后自动消失。

<preview path="../demo/Message/Basic.vue" title="基础用法" description="Message 组件的基础用法"></preview>

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

<preview path="../demo/Message/Types.vue" title="不同状态" description="不同状态的消息提示"></preview>

## Message Options

| Name | Description | Type | Default |
|------|-------------|------|---------|
| message | 消息文字 | `string` | — |
| type | 主题 | `'success' \| 'warning' \| 'info' \| 'error'` | info |
| duration | 显示时间，毫秒 | `number` | 3000 |
| showClose | 是否显示关闭按钮 | `boolean` | false | 