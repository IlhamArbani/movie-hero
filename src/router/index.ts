import { createRouter, createWebHistory } from 'vue-router'
import Movies from '../views/Movies/index.vue'
import Home from '../views/pages/Home.vue'
import TvShows from '../views/TvShows/index.vue'
import DetailPage from '../views/pages/DetailPage.vue'
import SuggestMe from '../views/pages/SuggestMe.vue'
import LoginPage from '../views/pages/LoginPage.vue'
import DashboardPage from '../views/pages/DashboardPage.vue'
import SearchItems from '../views/SearchItems/index.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: Home, children: [
                { path: '', component: Movies },
                { path: 'tvshows', component: TvShows },
                { path: 'search', component: SearchItems }
            ]
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