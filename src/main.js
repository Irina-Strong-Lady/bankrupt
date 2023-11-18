import './assets/styles/main.sass'
import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vScroll from './directives/vScroll'
import { MotionPlugin } from '@vueuse/motion'
import "bootstrap/dist/js/bootstrap.js"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.directive('scroll', vScroll)
app.use(MotionPlugin)

app.mount('#app')
