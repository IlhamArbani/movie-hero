<template>
    <div class="bg-main-background px-28 pt-20">
        <BaseBanner/>
        <ButtonNavigation @show-item="setShow" :type="show"/>
        <Movies v-if="show === 'movies' || show === 'all'"/>
        <TvShows v-if="show === 'tvshows'"/>
    </div>
</template>

<script>
import ButtonNavigation from '../../components/ButtonNavigation.vue'
import TvShows from '../TvShows/index.vue'
import Movies from '../Movies/index.vue'
export default {
    components:{
        ButtonNavigation,
        TvShows,
        Movies
    },
    data(){
        return{
            show:'all'
        }
    },
    methods:{
        setShow(type){
            this.show = type
        }
    }
}
</script>