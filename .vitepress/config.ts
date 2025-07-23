import { defineConfig } from 'vitepress'

import { en } from './locales/en'
import { ru } from './locales/ru'

export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: { api: 'modern' },
      },
    },
  },
  srcDir: 'src',
  outDir: 'dist',
  title: 'Have Fund',
  description: 'Decentralized investment fund',
  head: [['link', { rel: 'icon', type: 'image/svg', href: '/icon.png' }]],
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    },
  },
  themeConfig: {
    logo: {
      src: '/icon.png',
      alt: 'Avalanche Logo',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/have-fund' },
      { icon: 'telegram', link: 'https://t.me/creating_fund' },
    ],
  },
  locales: {
    root: en,
    ru,
  },
})
