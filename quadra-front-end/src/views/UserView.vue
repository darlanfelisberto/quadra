<script setup>

import FormUser from '../components/forms/FormUser.vue'


defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    page user
    <FormUser></FormUser>
  </div>
</template>

<style scoped>

</style>
