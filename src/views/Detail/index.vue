<template>
    <div class="bg-main-background px-28 pt-20">
        <div class="w-full h-96 relative rounded-lg bg-cover" :style="`background-image:url('${details.posters.posters[0].link}')`">
            <div class="w-2/6 backdrop-blur-sm bg-white/30 backdrop-brightness-50 h-36 absolute -bottom-16 left-10 rounded-lg flex flex-col justify-center pl-10">
                <p class="text-white text-sm">Movie Hero / {{details.type}}</p>
                <h1 class="text-white text-4xl">{{details.title}}</h1>
            </div>
        </div>

        <div class="flex mt-40">
            <div class="w-1/2 h-2/5 flex justify-center">
                <img :src="details.image" class="w-1/2 rounded-md" alt="">
            </div>
            <div class="w-1/2">
                <div class="mb-7">
                    <h1 class="text-white text-base font-bold">{{details.title}}</h1>
                    <p class="text-white text-sm">{{details.plot}}</p>
                </div>
                <div class="mb-7">
                    <p class="text-white text-xs">type</p>
                    <p class="text-white text-sm">{{details.type}}</p>
                </div>
                <div class="mb-7">
                    <p class="text-white text-xs">Release Date</p>
                    <p class="text-white text-sm">{{details.releaseDate}}</p>
                </div>
                <div class="mb-7">
                    <p class="text-white text-xs">Run Time</p>
                    <p class="text-white text-sm">{{details.runtimeStr}}</p>
                </div>
                <div class="mb-7">
                    <p class="text-white text-xs">Generes</p>
                    <p class="text-white text-sm">{{details.genres}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import {computed,onBeforeMount} from 'vue';
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'

export default {
    setup(){
        const store = useStore();
        const route = useRoute();

        const details = computed(function(){
            return store.getters['detail']
        })

        onBeforeMount(function(){
            store.dispatch('getDetail',{value:route.params.id})
        })

        console.log(details)

        return {details}
    }
}
</script>