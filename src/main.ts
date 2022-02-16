import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import store from './store/index';
import './index.css'

import TheHeader from './components/layout/TheHeader.vue'
import BaseItemCard from './components/ui/BaseItemCard.vue'
import BaseBanner from './components/ui/BaseBanner.vue'
import Gap from './components/ui/Gap.vue'

const app = createApp(App)

app.component('TheHeader',TheHeader);
app.component('BaseItemCard', BaseItemCard);
app.component('BaseBanner', BaseBanner);
app.component('Gap', Gap)

app.use(router)

app.use(store).mount('#app')
