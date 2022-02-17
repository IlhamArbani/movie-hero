<template>
    <div class="mb-40 w-3/5">
        <h1 class="text-white font-semibold text-6xl mb-4">{{title}}</h1>
        <p class="text-white text-lg mb-6">List of movies and TV Shows, I, Pramod Poudel have watched till date. Explore what I have watched and also feel free to make a suggestion. 😉</p>
        <input v-model="searchInput" class="bg-main-color border-slate-500 border-2 rounded-md text-white p-1" type="text">
        <router-link :to="search" class="bg-violet-500 text-white ml-2 px-4 py-1 rounded-md">Search</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchInput:'',
        }
    },
    props:{
        title: {
            default: 'Movie Hero',
            type:String
        }
    },
    computed:{
        search(){
            return {path:'/search',query:{title:this.searchInput}}
        }
    },
}
</script>