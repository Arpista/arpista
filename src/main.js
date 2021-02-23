import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import ContactMe from './components/ContactMe.vue'
import Qualifications from './components/Qualifications.vue'
import Services from './components/Services.vue'
import Links from './components/Links.vue'

import 'windi.css'
import './index.css'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: ContactMe },
  { path: '/qualifications', component: Qualifications },
  { path: '/services', component: Services },
  { path: '/links', component: Links },
]

const router = createRouter({ history: createWebHistory(), routes })

createApp(App).use(router).mount('#app')
