<template>
    <div class="adminPenel container">
        <router-link :to="{name : 'AdminProduct' }">
            <button type="button" class="btn btn-primary btn-lg">Administrador de Produtos</button>
        </router-link>

        <router-link :to="{name : 'AdminCategory'}">
            <button type="button" class="btn btn-primary btn-lg">Aministrador de Categorias</button>
        </router-link>

        <router-link :to="{name : 'Gallery'}">
            <button type="button" class="btn btn-primary btn-lg">Aministrador de Galeria</button>
        </router-link>
        
    </div>
</template>
<script>
export default {
    mounted() {
        if (!localStorage.getItem('token')) {
            this.$router.push({name : 'Signin'});
        }
    }
}
</script>
<style>
    .adminPanel {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .adminPanel button {
        font-size: 30px;
        width: fit-content;
        margin: 55px 0;
    }
</style>