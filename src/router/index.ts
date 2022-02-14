import { createRouter, createWebHistory } from 'vue-router'
import Movies from '../views/Movies/index.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Movies }
    ]
});

export default router;