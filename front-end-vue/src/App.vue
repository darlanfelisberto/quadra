<script setup>

import HeaderTemplate from './components/layout/HeaderTemplate.vue';
import NavTemplate from './components/layout/NavTemplate.vue';
import ConteudoTemplate from './components/layout/ConteudoTemplate.vue';
import FooterTemplate from './components/layout/FooterTemplate.vue';
</script>

<template>
    <div class="container">
      <NavTemplate></NavTemplate>
      <main>
        <HeaderTemplate></HeaderTemplate>
        
          <ConteudoTemplate class="miolo"></ConteudoTemplate>
        
        <FooterTemplate></FooterTemplate>
      </main>
    </div>
</template>

<style scoped>
  main{
    display: flex;
    flex: 1;
    flex-direction: column;
  }
</style>
