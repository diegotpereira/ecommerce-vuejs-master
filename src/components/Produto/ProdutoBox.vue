<template>
    <div class="card h-100">
        <div class="embed-responsive embed-responsive-16by9">
            <img class="card-img-top embed-responsive-item" alt="" >
        </div>

        <div class="card-body">
            <router-link :to="{ name: 'ShowDetails', params: { id: product.id }}"><h5 class="card-title">{{ product.name }}</h5></router-link>
            <p class="card-text"><sup>$</sup>{{ product.price }}</p>
            <p class="card-text font-italic">{{ product.description.substring(0,65)}}...</p>
            <router-link id="edit-product" :to="{name: 'EditProduct', params : { id: product.id } }" v-show="$route.name=='AdminProduct'">Editar</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProdutoBox",
    props: ["product"],

    methods: {
        showDetails() {
            this.$router.push({ name: 'showDetails', params: { id: this.product.id }})
        }
    }
}
</script>