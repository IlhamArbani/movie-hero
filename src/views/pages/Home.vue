<template>
    <div class="bg-main-background px-28 pt-20">
        <BaseBanner/>
        <ButtonNavigation/>
        <router-view></router-view>
    </div>
</template>

<script>
import ButtonNavigation from '../../components/ButtonNavigation.vue'
export default {
    components:{
        ButtonNavigation
    }
}
</script>