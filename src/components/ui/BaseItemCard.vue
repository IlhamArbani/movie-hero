<template>
    <div class="backdrop-blur-sm bg-white/30 m-2 w-64 p-1 rounded-md">
        <img :src="img_url" alt="" class="w-full rounded-md h-96">
        <div class="w-full">
            <router-link :to="`/detail/${id}`">
                <h1 class="mt-4 mb-2 truncate text-white">{{title}}</h1>
            </router-link>
            <SuggestButton v-if="path !== '/suggestme'" :id="id" :title="title" :img_url="img_url"/>
        </div>
    </div>
</template>

<script>
import SuggestButton from '../SuggestButton.vue'
export default {
    props:{
        img_url:String,
        title:String,
        id:String,
        path:String
    },
    components:{
        SuggestButton
    }
}
</script>