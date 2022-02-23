<template>
    <button @click="setSuggest" class="flex items-center">
        <img src="../assets/like.png" class="w-6 mr-2" alt="">
        <p class="text-violet-500 font-bold">Suggest This</p>
    </button>
</template>

<script lang='ts'>
import {useStore} from 'vuex'
export default {
    props:{
        id:String,
        title:String,
        img_url:String
    },
    setup(props){
        const store = useStore()

        function setSuggest(){
            store.dispatch('setSuggest',{id:props.id,title:props.title,img_url:props.img_url})
            store.dispatch('setModal',true)
            setTimeout(() => {
                store.dispatch('setModal',false)
            },3000)
        }

        return{setSuggest}
    }
}
</script>