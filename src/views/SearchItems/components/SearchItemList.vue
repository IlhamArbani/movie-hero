<template>
    <div class="flex flex-row flex-wrap">
        <BaseItemCard v-for="searchItem in searchItems" :key="searchItem.id" :id="searchItem.id" :title="searchItem.title" :img_url="searchItem.image"/>
    </div>
</template>

<script>
export default {
    beforeCreate(){
        this.$store.dispatch('searchByTitle',this.$route.query.title)
    },
    computed:{
        searchItems(){
            return this.$store.getters['searchItem']
        }
    }
}
</script>