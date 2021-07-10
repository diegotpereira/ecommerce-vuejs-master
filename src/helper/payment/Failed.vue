<template>
    <div class="text-center">
        <div class="spinner-grow text-danger" role="status">
            <span class="sr-sr-only">Carregando...</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FaliedPayment',

    mounted() {
        localStorage.removeItem('sessionId')
        window.location.href = '/order'
    }
}
</script>