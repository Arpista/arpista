import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import 'windi.css'
import './index.css'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [{ path: '/', component: Home }]

const router = createRouter({ history: createWebHistory(), routes })

createApp(App).use(router).mount('#app')
