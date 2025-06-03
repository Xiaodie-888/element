---
title: Tooltip | V-Element
description: Tooltip 组件的文档
---

# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解。

<preview path="../demo/Tooltip/Basic.vue" title="基础用法" description="Tooltip 组件的基础用法"></preview>

## Tooltip Attributes

| Name | Description | Type | Default |
|------|-------------|------|---------|
| content | 显示的内容 | `string` | — |
| placement | 出现位置 | `'top' \| 'bottom' \| 'left' \| 'right'` | top |
| trigger | 触发方式 | `'hover' \| 'click'` | hover |
| manual | 是否手动控制 | `boolean` | false | 