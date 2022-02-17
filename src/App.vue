<template>
  <teleport to="body">
        <BaseModal v-if="modalIsOpen"/>
  </teleport>
  <TheHeader/>
  <main class="bg-main-color min-h-screen font-poppins">
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  computed:{
    modalIsOpen(){
      return this.$store.getters['modalIsOpen']
    }
  }
}
</script>
