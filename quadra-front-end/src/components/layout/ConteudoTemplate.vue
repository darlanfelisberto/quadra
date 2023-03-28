<script>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
    <div class="conteudo">
        Conteudo
        <header>
            <div class="wrapper">
                <HelloWorld msg="You did it!" />

                <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                </nav>
            </div>
        </header>

        <RouterView ></RouterView>
    </div>
</template>

<style>
.conteudo {
    background-color: black;
    height: 100%;
}
</style>