<template>
    <div class="w-1/4 backdrop-blur-sm bg-white/30 rounded-md py-4">
        <p class="text-white text-center text-3xl font-bold">{{count}}</p>
        <p class="text-white text-center text-base">{{title}}</p>
    </div>
</template>

<script>
export default {
    props:{
        count: String,
        title: String
    }
}
</script>