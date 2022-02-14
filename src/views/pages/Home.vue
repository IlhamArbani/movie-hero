<template>
    <div class="bg-main-background px-28 pt-20">
        <div class="mb-40 w-3/5">
            <h1 class="text-white font-semibold text-6xl mb-4">Movie Heroku</h1>
            <p class="text-white text-lg mb-6">List of movies and TV Shows, I, Pramod Poudel have watched till date. Explore what I have watched and also feel free to make a suggestion. 😉</p>
            <input class="bg-main-color border-slate-500 border-2 rounded-md" type="text">
        </div>
        <ButtonNavigation/>
        <router-view></router-view>
    </div>
</template>

<script>
import ButtonNavigation from '../../components/ButtonNavigation.vue'
export default {
    components:{
        ButtonNavigation
    }
}
</script>