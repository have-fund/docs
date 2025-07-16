import DefaultTheme from 'vitepress/theme'
import '@catppuccin/vitepress/theme/mocha/mauve.css'

import './global.scss'

import NotReadyBadge from './components/NotReadyBadge.vue'

// noinspection JSUnusedGlobalSymbols
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('NotReadyBadge', NotReadyBadge)
  },
}
