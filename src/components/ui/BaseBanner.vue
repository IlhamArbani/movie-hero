<template>
    <div class="mb-40 w-3/5">
        <h1 class="text-white font-semibold text-6xl mb-4">{{title}}</h1>
        <p class="text-white text-lg mb-6">List of movies and TV Shows, I, Pramod Poudel have watched till date. Explore what I have watched and also feel free to make a suggestion. 😉</p>
        <input class="bg-main-color border-slate-500 border-2 rounded-md" type="text">
    </div>
</template>

<script>
export default {
    props:{
        title: {
            default: 'Movie Hero',
            type:String
        }
    }
}
</script>