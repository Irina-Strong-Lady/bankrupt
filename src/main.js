
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import { MotionPlugin } from '@vueuse/motion'
import './assets/styles/main.sass'
import 'element-plus/dist/index.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(MotionPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
