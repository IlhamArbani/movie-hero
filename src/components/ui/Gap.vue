<template>
    <div :style="`width:${width}px;height:${height}px`">

    </div>
</template>

<script>
export default {
    props:{
        width:{
            type:String,
            default:"0"
        },
        height:{
            type:String,
            default:"0"
        }
    }
}
</script>