<template>
    <header class="w-full px-28 flex justify-between bg-gray-900 items-center backdrop-opacity-10 py-5">
        <img src="../../assets/logo.png" class="h-10 w-10">
        <nav>
            <ul class="flex text-white">
                <li class="mr-2">
                    <router-link class="font-bold" to="/">Home</router-link>
                </li>
                <li class="mr-2">
                    <router-link class="font-bold" to="/suggestme">Suggest me</router-link>
                </li>
                <li class="mr-2" v-if="!user.name">
                    <router-link class="font-bold" to="/login">Login</router-link>
                </li>
                <li class="mr-2" v-else>
                    <router-link class="font-bold" to="/dashboard">Dashboard</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>



<script lang="ts">
import {computed} from 'vue';
import {useStore} from '../../store/index';

export default{
    setup(){
        const store = useStore();

        const user = computed(function(){
            return store.getters!['user']
        })

        return{user}
    }
}
</script>
