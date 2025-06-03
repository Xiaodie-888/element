import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "V-Element 组件库",
  description: "基于 Vue 3 的组件库",
  vite: {
    plugins: [
      VueMacros.vite({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx(),
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件文档', link: '/components/button' },
      { text: '快速开始', link: '/guide/installation' },
      { 
        text: '更多',
        items: [
          { text: '更新日志', link: '/changelog' },
          { text: '常见问题', link: '/faq' }
        ]
      }
    ],

    sidebar: [
      {
        text: '开发指南',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '基础组件',
        items: [
          { text: 'Icon 图标', link: '/components/icon' },
          { text: 'Button 按钮', link: '/components/button' }
        ]
      },
      {
        text: '表单组件',
        items: [
          { text: 'Input 输入框', link: '/components/input' },
          { text: 'Select 选择器', link: '/components/select' },
          { text: 'Switch 开关', link: '/components/switch' }
        ]
      },
      {
        text: '数据展示',
        items: [
          { text: 'Collapse 折叠面板', link: '/components/collapse' },
          { text: 'Tooltip 文字提示', link: '/components/tooltip' }
        ]
      },
      {
        text: '反馈组件',
        items: [
          { text: 'Message 消息提示', link: '/components/message' },
          { text: 'Dropdown 下拉菜单', link: '/components/dropdown' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
