<script >
    import Password from 'primevue/password';
    console.log('hello script setup')
    function mounted() {
        console.log('mounted');
    }
    export default{
        name:'FormUser',
        mounted() {
            console.log('mounted');
        }
    }
</script>

<template>
  <div >
    <div class="card">
        <div class="formgrid grid">
            <div class="field col-12 md:col-6">
                <label>Username:</label>
                <input name="username" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="lastname6">Senha</label>
              
            </div>
            <div class="field col-12 md:col-6">
                <label>Nome:</label>
                <input name="nome"  class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
            </div>
            <div class="field col-12 md:col-6">
                <label>E-mail:</label>
                <input name="email" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>
