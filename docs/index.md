---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "V-Element"
  text: "现代化 Vue 3 组件库"
  tagline: 🚀 基于 Vue 3 + TypeScript 构建的高质量 UI 组件库，让开发更简单、更高效
  image:
    src: /logo.svg
    alt: V-Element
  actions:
    - theme: brand
      text: 快速开始
      link: /components/button


features:
  - icon: 🎯
    title: Vue 3 原生支持
    details: 基于 Vue 3 Composition API 开发，充分利用 Vue 3 的响应式系统和性能优势
  - icon: 📝
    title: TypeScript 支持
    details: 使用 TypeScript 编写，提供完整的类型定义，让开发更加安全可靠
  - icon: 🎨
    title: 现代化设计
    details: 遵循现代设计规范，提供简洁美观的 UI 组件，支持主题定制
  - icon: 📦
    title: 按需引入
    details: 支持 Tree Shaking，只打包使用的组件，有效减小包体积
  - icon: 🔧
    title: 易于使用
    details: API 设计简洁明了，文档详细完整，上手即用
  - icon: 🌟
    title: 高质量代码
    details: 严格的代码规范，完善的测试覆盖，保证组件的稳定性和可靠性
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

.VPHome .VPFeatures .VPFeature .title {
  font-size: 1.25rem;
  font-weight: 600;
}

.VPHome .VPFeatures .VPFeature .details {
  line-height: 1.7;
  color: var(--vp-c-text-2);
}
</style>

