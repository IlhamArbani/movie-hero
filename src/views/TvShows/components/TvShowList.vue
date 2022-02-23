<template>
    <div class="flex flex-row flex-wrap">
        <BaseItemCard v-for="tvShow in tvShows" :key="tvShow.id" :id="tvShow.id" :title="tvShow.title" :img_url="tvShow.image"/>
    </div>
</template>

<script lang='ts'>
import {computed,onBeforeMount} from 'vue';
import {useStore} from 'vuex'
export default {
    setup(){
        const store = useStore();

        const tvShows = computed(function(){
            return store.getters['tvshows/getTvShows']
        })
        onBeforeMount(function(){
            store.dispatch('tvshows/getTvShowItem')
        })

        return{tvShows}
    }
}
</script>