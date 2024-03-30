import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Revue de code documentée",
  base: '/appweb-exer16/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'La revue de mon TP01', link: '/zachary-imbeault' }
    ],

    footer: {
      message: 'Exercice 16',
      copyright: 'Zachary Imbeault'
    }
  }
})
