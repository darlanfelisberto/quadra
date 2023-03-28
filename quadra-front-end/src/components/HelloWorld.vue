<script setup>

import HeaderTemplate from './layout/HeaderTemplate.vue';

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <HeaderTemplate></HeaderTemplate>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>oisad

      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>

</style>
