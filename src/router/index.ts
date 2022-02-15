import { createRouter, createWebHistory } from 'vue-router'
import Movies from '../views/Movies/index.vue'
import Home from '../views/pages/Home.vue'
import TvShows from '../views/TvShows/index.vue'
import DetailPage from '../views/pages/DetailPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: Home, children: [
                { path: '', component: Movies },
                { path: 'tvshows', component: TvShows }
            ]
        },
        {
            path: '/detail/:id', component: DetailPage
        }
    ]
});

export default router;