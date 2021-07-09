<template>
    <div class="card category-card">
        <img :src="category.imageUrl" class="card-img-top" alt="image" @click="listProducts">
        <p class="name" @click="listProducts">
            {{category.categoryName}}
        </p>
        <p class="card-text">
            {{category.description}}    
        </p>    
    </div>
</template>


<script>
export default {
    name: "CategoryCard",
    props: ["category"],

    methods : {
        listProducts() {
            this.$router.push({ name: 'listProducts', params: {id : this.category.id}})
        }
    }
}
</script>


<style>
.card {
    widows: 20rem;
    height: 24rem;
}

.category-card img:hover {
    cursor: pointer;
}

.category-card .name:hover {
    cursor: pointer;
}

p.name {
    font-family: 'Courgutte', cursive;
    font-size: 30px;
}
</style>
