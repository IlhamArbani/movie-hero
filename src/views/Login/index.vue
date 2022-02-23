<template>
    <div class="flex justify-around pt-8">
        <div class="w-2/5">
            <img src="../../assets/login_logo.png" class="w-4/5" alt="">
        </div>
        <div class="w-2/5 flex flex-col justify-center">
            <div class="h-3/5">
                <h1 class="text-white text-6xl font-bold">Login</h1>
                <form class="flex flex-col mt-4 pr-16" @submit.prevent="login" action="">
                    <input type="text" name="username" class="h-9 bg-main-color border-slate-500 border-2 rounded-md text-white mb-2 px-1">
                    <input type="password" name="password" class="h-9 bg-main-color border-slate-500 border-2 rounded-md text-white px-1">
                    <button class="text-white mt-6 bg-violet-500 rounded-md h-9">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import {useStore} from 'vuex'
export default {
    setup(){
        const store = useStore();
        function login(e:any){
            store.dispatch('login',{username:e.target.elements.username.value,password:e.target.elements.password.value})
        }

        return{login}
    }
}
</script>