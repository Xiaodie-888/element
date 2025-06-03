---
title: Select | V-Element
description: Select 组件的文档
---

# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选。

<preview path="../demo/Select/Basic.vue" title="基础用法" description="Select 组件的基础用法"></preview>

## 禁用状态

选择器不可用状态。

<preview path="../demo/Select/Disabled.vue" title="禁用状态" description="禁用状态的选择器"></preview>

## Select Attributes

| Name | Description | Type | Default |
|------|-------------|------|---------|
| model-value | 绑定值 | `string \| number` | — |
| options | 选项数据 | `SelectOption[]` | — |
| placeholder | 占位符 | `string` | 请选择 |
| disabled | 是否禁用 | `boolean` | false |
| clearable | 是否可以清空选项 | `boolean` | false |
| filterable | 是否可搜索 | `boolean` | false |


