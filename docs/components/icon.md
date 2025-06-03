---
title: Icon | V-Element
description: Icon 组件的文档
---

# Icon 图标
基于 FontAwesome 的图标组件，提供了一套常用的图标集合。

## 基础用法
使用 `icon` 属性指定图标名称。

<preview path="../demo/Icon/Basic.vue" title="基础用法" description="Icon 组件的基础用法"></preview>

## 图标尺寸
使用 `size` 属性改变图标大小。

<preview path="../demo/Icon/Size.vue" title="图标尺寸" description="不同尺寸的图标"></preview>

## 图标颜色
使用 `color` 属性设置图标颜色，或使用 `type` 属性设置预定义的主题色。

<preview path="../demo/Icon/Color.vue" title="图标颜色" description="不同颜色的图标"></preview>

## 图标动画
支持多种动画效果：旋转、闪烁、跳动等。

<preview path="../demo/Icon/Animation.vue" title="图标动画" description="带有动画效果的图标"></preview>

## Icon Attributes

| Name | Description | Type | Default |
|------|-------------|------|---------|
| icon | 图标名称 | `string` | — |
| size | 图标尺寸 | `'2xs' \| 'xs' \| 'sm' \| 'lg' \| 'xl' \| '2xl' \| '1x' \| '2x' \| '3x' \| '4x' \| '5x' \| '6x' \| '7x' \| '8x' \| '9x' \| '10x'` | — |
| color | 图标颜色 | `string` | — |
| type | 图标类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | — |
| spin | 是否旋转 | `boolean` | false |
| pulse | 是否闪烁 | `boolean` | false |
| bounce | 是否跳动 | `boolean` | false |
| shake | 是否摇摆 | `boolean` | false |
| beat | 是否跳动 | `boolean` | false |
| fade | 是否淡入淡出 | `boolean` | false |
| flip | 翻转方向 | `'horizontal' \| 'vertical' \| 'both'` | — |
| rotation | 旋转角度 | `90 \| 180 \| 270` | — | 