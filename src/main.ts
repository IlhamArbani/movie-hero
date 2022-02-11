import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'

import TheHeader from './components/layout/TheHeader.vue'

const app = createApp(App)

app.component('TheHeader',TheHeader);

app.use(router)

app.mount('#app')
