<template>
    <div class="flex flex-row flex-wrap">
        <BaseItemCard v-for="movie in movies" :key="movie.id" :id="movie.id" :title="movie.title" :img_url="movie.image"/>
    </div>
</template>

<script>
export default {
    beforeCreate(){
        this.$store.dispatch('movies/getMoviesItem')
    },
    computed:{
        movies(){
            return this.$store.getters['movies/getMovies']
        }
    }
}
</script>