<template>
    <button @click="setSuggest" class="flex items-center">
        <img src="../assets/like.png" class="w-6 mr-2" alt="">
        <p class="text-violet-500 font-bold">Suggest This</p>
    </button>
</template>

<script>
export default {
    props:{
        id:String,
        title:String,
        img_url:String
    },
    methods:{
        setSuggest(){
            this.$store.dispatch('setSuggest',{id:this.id,title:this.title,img_url:this.img_url})
            this.$store.dispatch('setModal',true)
            setTimeout(() => {
                this.$store.dispatch('setModal',false)
            },3000)
        }
    }
}
</script>