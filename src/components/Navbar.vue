<template>
  <div
    id="navbar"
    class="flex flex-row flex-wrap justify-between text-gray-100 px-8 py-2"
  >
    <router-link
      v-for="(link, title) in links"
      :key="link"
      class="invert mx-2"
      :to="link"
    >
      {{ title }}
    </router-link>
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
