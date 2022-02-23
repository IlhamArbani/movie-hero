<template>
  <teleport to="body">
        <BaseModal v-if="modalIsOpen"/>
  </teleport>
  <TheHeader/>
  <main class="bg-main-color min-h-screen font-poppins">
    <router-view></router-view>
  </main>
</template>

<script lang='ts'>
import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
  setup(){
    const store = useStore()
    
    const modalIsOpen = computed(function(){
      return store.getters['modalIsOpen']
    })

    return{modalIsOpen}
  }
}
</script>
