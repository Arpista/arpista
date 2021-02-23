<template>
  <div id="navbar" class="flex flex-row text-gray-100 px-8 space-x-6 py-2">
    <div v-for="(link, title) in links">
      <router-link class="invert" :to="link">{{ title }}</router-link>
    </div>
  </div>
</template>

<script setup>
const links = {
  Home: '/',
  'Contact Me': '/contact',
  Qualifications: '/qualifications',
  Services: '/services',
  'Useful Links': '/links',
}
</script>

<style scoped>
#navbar {
  background-color: #00127a;
}
</style>
