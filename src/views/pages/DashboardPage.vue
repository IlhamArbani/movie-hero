<template>
    <div class="px-28 pt-8">
        <h1 class="text-white text-6xl font-bold">Welcome</h1>
        <div class="flex justify-between pt-8">
            <DashboardCard title="Movie" count="95"/>
            <DashboardCard title="Movie" count="95"/>
            <DashboardCard title="Movie" count="95"/>
        </div>
        <h2 class="text-white font-bold text-lg text-center my-8">Quick Links</h2>
        <div class="flex">
            <router-link class="w-full backdrop-blur-sm bg-white/30 rounded-md py-12" to="/suggestme">
                <p class="text-violet-500 text-center">
                    Sugestions
                </p>
            </router-link>
            <Gap width="120"/>
            <router-link class="w-full backdrop-blur-sm bg-white/30 rounded-md py-12" to="/">
                <p class="text-center text-violet-500">
                    Add Sugestions
                </p>
            </router-link>
        </div>
    </div>
</template>

<script>
import DashboardCard from '../Base/DashboardCard.vue'
export default {
    components:{
        DashboardCard
    }
}
</script>