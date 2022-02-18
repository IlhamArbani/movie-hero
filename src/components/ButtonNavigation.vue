<template>
    <div class="flex p-1 bg-main-color w-fit rounded-md">
        <button @click="show('all')" class="w-20 h-10 rounded-md text-white  flex justify-center items-center" :class="type === 'all' ? 'bg-violet-400': ''" to="/">All</button>
        <button @click="show('movies')" class="w-20 h-10 rounded-md text-white  flex justify-center items-center" :class="type === 'movies' ? 'bg-violet-400': ''" to="/">Movies</button>
        <button @click="show('tvshows')" class="w-20 h-10 rounded-md text-white  flex justify-center items-center" :class="type === 'tvshows' ? 'bg-violet-400': ''" to="/tvshows">Tv Shows</button>
    </div>
</template>

<script>
export default {
    props:{
        type:String
    },
    methods:{
        show(type){
            this.$emit('show-item',type)
        }
    }
}
</script>