<template>
  <div class="w-full min-h-screen bg-white">
    <div class="w-3/4 mx-auto">
      <div class="flex justify-center py-8">
        <AppNavbar />
      </div>
      <router-view />
      <div>
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppNavbar from './components/AppNavbar/AppNavbar.vue'
import AppFooter from './components/Footer/AppFooter.vue'
</script>

<style scoped></style>
