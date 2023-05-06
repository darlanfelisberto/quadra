<script setup>


defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div >
    <h1>form user</h1>
    <form action="#">
        <label>Username:</label>
        <input name="username" />
        <label>Senha:</label>
        <input name="password" />
        
        <label>Nome:</label>
        <input name="nome" />

        <label>E-mail:</label>
        <input name="email" />

    </form>
  </div>
</template>

<style scoped>

</style>
