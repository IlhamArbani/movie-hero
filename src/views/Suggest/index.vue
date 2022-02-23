<template>
    <div class="bg-main-background px-28 pt-20">
        <BaseBanner title="Suggest Me"/>
        <div class="flex flex-col justify-center items-center">
            <div class="flex flex-row flex-wrap">
                <BaseItemCard v-for="suggest in suggests" :key="suggest.id" :id="suggest.id" :title="suggest.title" :img_url="suggest.img_url" :path="this.$route.path"/>
            </div>
            <div v-if="suggests.length === 0" class="flex flex-col items-center">
                <h1 class="text-white font-bold text-5xl mb-8">There is not sugestion yet</h1>
                <router-link to="/">
                    <button class="text-white w-32 h-12 text-center bg-violet-500 rounded-md">
                        Suggest Now
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
    setup(){
        const store = useStore;

        const suggests = computed(function(){
            return store.getters['suggests']
        })

        return{suggests}
    }
}
</script>