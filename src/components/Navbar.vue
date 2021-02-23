<template>
  <div id="navbar" class="flex flex-row text-gray-100 px-8 space-x-6 py-2">
    <div v-for="(link, title) in links">
      <router-link :to="link">{{ title }}</router-link>
    </div>
  </div>
</template>

<script setup>
const links = {
  Home: '',
  'Contact Me': '',
  Qualifications: '',
  Services: '',
  'Useful Links': '',
}
</script>

<style scoped>
#navbar {
  background-color: #00127a;
}
</style>
