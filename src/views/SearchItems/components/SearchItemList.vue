<template>
    <div class="flex flex-row flex-wrap">
        <BaseItemCard v-for="searchItem in searchItems" :key="searchItem.id" :id="searchItem.id" :title="searchItem.title" :img_url="searchItem.image"/>
    </div>
</template>

<script lang='ts'>
import {onBeforeMount,computed} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'

export default {
    setup(){
        const store = useStore()
        const route = useRoute()

        const searchItems = computed(function(){
            return store.getters['searchItem']
        })

        onBeforeMount(function(){
            store.dispatch('searchByTitle', route.query.title)
        })

        return{searchItems}
    }
}
</script>