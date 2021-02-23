<template>
  <div class="center-column">
    <div class="px-8">
      <h1>Arpista Editing</h1>
    </div>
    <Navbar />
    <router-view class="content-page"></router-view>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
