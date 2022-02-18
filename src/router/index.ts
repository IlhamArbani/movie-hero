import { createRouter, createWebHistory } from 'vue-router'

// Import Pages
import Home from '../views/pages/Home.vue'
import DetailPage from '../views/pages/DetailPage.vue'
import SuggestMe from '../views/pages/SuggestMe.vue'
import LoginPage from '../views/pages/LoginPage.vue'
import DashboardPage from '../views/pages/DashboardPage.vue'


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