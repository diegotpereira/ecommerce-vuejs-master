<template>
<!--  For HomePage-->
  <div class="card product-card">
    <img :src="product.imageURL" class="card-img-top" alt="image" @click="showDetails">
    <div class="card-body">
      <p class="name" @click="showDetails">{{product.name}}</p>
      <p class="card-text">{{product.description}}</p>
    </div>
  </div>
</template>

<script>
    export default {
    name : "ProdutoCard",
    props : ["product"],
    methods : {
        showDetails(){
        this.$router.push({ name: 'ShowDetails', params: { id : this.product.id } })
        }
    }
    }
</script>

