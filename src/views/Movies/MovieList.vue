<template>
    <div class="flex flex-row flex-wrap">
        <MovieCard v-for="movie in movies" :key="movie.id" :title="movie.title" :img_url="movie.image"/>
    </div>
</template>

<script>
import MovieCard from './MovieCard.vue'
export default {
    components:{
        MovieCard
    },
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