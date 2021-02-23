<template>
  <div class="center-column mt-4 mx-auto bg-gray-100">
    <div class="px-8">
      <h1>Arpista Editing</h1>
    </div>
    <Navbar />
    <router-view class="px-8 py-2"></router-view>
    <div id="footer" class="px-8 py-2 text-gray-100">
      © 2013–2021 Arpista Editing
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style scoped>
hr {
  border-width: 2px;
  background-color: black;
}

.center-column {
  max-width: 640px;
  box-shadow: 0 0.25rem 0.5rem rgb(0 0 0 / 50%);
}

#footer {
  background-color: #00127a;
}
</style>
