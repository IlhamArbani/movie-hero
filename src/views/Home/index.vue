<template>
    <div class="bg-main-background px-28 pt-20">
        <BaseBanner/>
        <ButtonNavigation @show-item="setShow" :type="show"/>
        <Movies v-show="show === 'movies' || show === 'all'"/>
        <TvShows v-show="show === 'tvshows'"/>
    </div>
</template>

<script lang='ts'>
import ButtonNavigation from '../../components/ButtonNavigation.vue'
import TvShows from '../TvShows/index.vue'
import Movies from '../Movies/index.vue'

import {ref} from 'vue'
export default {
    components:{
        ButtonNavigation,
        TvShows,
        Movies
    },
    setup(){

        const show = ref('all');

        function setShow(type: string){
            show.value = type
        }

        return {show, setShow}
    }
}
</script>