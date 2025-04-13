import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    sidebar: [
      { text: '首頁', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: '關於', link: '/about/' },
      {
        text: '社群',
        path: '/community',
        children:[
          {text:'群組1',link:'community/community1.md'},
          {text:'群組2',link:'community/community2.md'},
        ]
      }
    ]
  }),

  lang: 'zh-TW',
  title: '你好， VuePress ！',
  description: '這是我第一個VUEPress 網站！',
  base: '/vuepress_tut/',
})