<template>
    <div class="flex flex-row flex-wrap">
        <BaseItemCard v-for="movie in movies" :key="movie.id" :id="movie.id" :title="movie.title" :img_url="movie.image"/>
    </div>
</template>

<script lang='ts'>
import {computed, onBeforeMount} from 'vue'
import {useStore} from 'vuex'
export default {
    setup(){
        const store = useStore()
        const movies = computed(function(){
            return store.getters['movies/getMovies']
        })

        onBeforeMount(function(){
            store.dispatch('movies/getMoviesItem')
        })

        return{movies}
    }
}
</script>