<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Novo Produto</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                
            </div>
            <div class="col-md-6 px-5 px-md-0">
                <form>
                    <div class="form-group">
                        <label>Categoria</label>
                        <select class="form-control" v-model="categoryId" required>
                            <option v-for="category of categories" :key="category.id" :value="category.id">
                                {{ category.categoryName }}
                            </option>    
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Nome</label>
                        <input type="text" class="form-control" v-model="name" required>
                    </div>
                    <div class="form-group">
                        <label>Descrição</label>
                        <input type="text" class="form-control" v-model="description" required>
                    </div>
                    <div class="form-group">
                        <label>Imagem Url</label>
                        <input type="url" class="form-control" v-model="imageURL" required>
                    </div>
                    <div class="form-group">
                        <label>Preço</label>
                        <input type="number" class="form-control" v-model="price" required>
                    </div>
                    <button type="button" class="btn btn-primary" @click="addProduct">Enviar</button>
                </form>
            </div>
            <div class="col-3">

            </div>
        </div>
    </div>
</template>

<script>

import swal from 'sweetalert';
import axios from 'axios';

export default {
    data() {
        return {
            id : null,
            categoryId : null,
            name : null,
            description : null,
            imageURL : null,
            price : null
        }
    },

    props : [ "baseURL", "products", "categories"],

    methods : {
        async addProduct() {
            const newProduct = {
                id : this.id,
                categoryId : this.categoryId,
                name : this.name,
                description : this.description,
                imageURL : this.imageURL,
                price : this.price
            }

            await axios({
                method : 'post',
                url: this.baseURL + "product/add",
                data : JSON.stringify(newProduct),
                
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                this.$emit("fetchData");
                this.$router.push({name : 'AdminProduct'});

                swal({
                    text: "Produto Adicionado com Sucesso!.",
                    icon: "success",
                    closeOnClickOutside: false,
                });
            })
            .catch(err => console.log(err));
        }
    },

    mounted() {
        if (!localStorage.getItem('token')) {
            this.$router.push({name : 'Signin'});
        }
    }
}
</script>

<style scoped>
h4 {
    font-family: 'Roboto', sans-serif;
    color: #484848;
    font-weight: 700;
}
</style>