<template>
    <div class="flex flex-row flex-wrap">
        <BaseItemCard v-for="tvShow in tvShows" :key="tvShow.id" :id="tvShow.id" :title="tvShow.title" :img_url="tvShow.image"/>
    </div>
</template>

<script>
export default {
    beforeCreate(){
        this.$store.dispatch('tvShows/getTvShowItem')
    },
    computed:{
        tvShows(){
            return this.$store.getters['tvShows/getTvShows']
        }
    }
}
</script>