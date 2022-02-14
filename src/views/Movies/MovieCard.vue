<template>
    <div class="bg-slate-500 m-2 w-64 p-1 rounded-md">
        <img :src="img_url" alt="" class="w-full rounded-md">
        <div class="w-full">
            <h1 class="mt-4 mb-2 truncate text-white">{{title}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        img_url:String,
        title:String
    }
}
</script>