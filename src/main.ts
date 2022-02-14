import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import store from './store/index';
import './index.css'

import TheHeader from './components/layout/TheHeader.vue'

const app = createApp(App)

app.component('TheHeader',TheHeader);

app.use(router)

app.use(store).mount('#app')
