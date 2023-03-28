<script setup>

import HeaderTemplate from './components/layout/HeaderTemplate.vue';
import NavTemplate from './components/layout/NavTemplate.vue';
import ConteudoTemplate from './components/layout/ConteudoTemplate.vue';
import FooterTemplate from './components/layout/FooterTemplate.vue';
</script>

<template>
    <div class="container">
      <HeaderTemplate></HeaderTemplate>
      <main>
        <section>
          <NavTemplate></NavTemplate>
        </section>
        <section class="space-element">
          <ConteudoTemplate></ConteudoTemplate>
        </section>
      </main>
      <FooterTemplate></FooterTemplate>
    </div>
</template>

<style scoped>
  body,main,.container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .space-element{
    padding: 5px 0px 5px 5px;
    width: 100%;
  }
  main{
    display: flex;
    flex: 1;
    flex-direction: row;
  }
</style>
