import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import 'uno.css'
import '@unocss/reset/tailwind.css'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.use(router).mount('#app')
