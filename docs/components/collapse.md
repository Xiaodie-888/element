---
title: Collapse | V-Element
description: Collapse 组件的文档
---

# Collapse 折叠面板

通过折叠面板收纳内容区域。

## 基础用法

可同时展开多个面板，面板之间不影响。

<preview path="../demo/Collapse/Basic.vue" title="基础用法" description="Collapse 组件的基础用法"></preview>

## Collapse Attributes

| Name | Description | Type | Default |
|------|-------------|------|---------|
| model-value | 当前活动的面板 | `string \| string[]` | — |
| accordion | 是否手风琴模式 | `boolean` | false |

## CollapseItem Attributes

| Name | Description | Type | Default |
|------|-------------|------|---------|
| name | 唯一标志符 | `string` | — |
| title | 面板标题 | `string` | — |
| disabled | 是否禁用 | `boolean` | false | 