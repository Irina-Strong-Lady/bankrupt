
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus'
import vScroll from './directives/vScroll'
import { MotionPlugin } from '@vueuse/motion'
import './assets/styles/main.sass'
import 'element-plus/dist/index.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(ElementPlus)
app.use(MotionPlugin)
app.use(pinia)
app.directive('scroll', vScroll)

app.mount('#app')
