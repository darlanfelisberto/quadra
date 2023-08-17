<script>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
    <div>
        Conteudo
        <div class="wrapper">
            <HelloWorld msg="You did it!" />

            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
        <RouterView ></RouterView>
    </div>
</template>

<style>
</style>