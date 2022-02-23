import { createRouter, createWebHistory } from 'vue-router'

// Import Pages
import Home from '../views/Home/index.vue'
import DetailPage from '../views/Detail/index.vue'
import SuggestMe from '../views/Suggest/index.vue'
import LoginPage from '../views/Login/index.vue'
import DashboardPage from '../views/Dashboard/index.vue'


const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: Home
        },
        {
            path: '/detail/:id', component: DetailPage
        },
        {
            path: '/suggestme', component: SuggestMe
        },
        {
            path: '/login', component: LoginPage
        },
        {
            path: '/dashboard', component: DashboardPage
        },
    ]
});

export default router;