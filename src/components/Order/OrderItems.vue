<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Pedido Id: - {{orderID}}</h4>
            </div>
        </div>
        <div v-for="itr in lengthofOrderItems" :key="itr" class="row mt-2 pt-3 justify-content-around">
            <div class="col-1">

            </div>
            <div class="col-md-3 embed-responsive embed-responsive-16by9">
                <img v-bind:src="orderProducts[itr-1].imgUrl" class="w-100 card-img-top embed-responsive-item">
            </div>
            <div class="col-md-5 px-3">
                <div class="card-block px-3">
                    <h6 class="card-title">{{orderProducts[itr-1].pName}}</h6>
                    <p id="item-price" class="mb-0 font-weight-bold">
                        <sup>R$</sup>{{orderProducts[itr-1].pPrice}} por unidade.
                    </p>
                    <p id="item-quantity" class="mb-0">
                        Quantidade : Quantity : {{orderProducts[itr-1].pQuantity}}
                    </p>

                    <p id="item-total-price" class="mb-0">
                        Preço Total : <sup>R$</sup>
                        <span class="font-weight-bold">
                            {{orderProducts[itr-1].price*orderProducts[itr-1].pQuantity}}
                        </span>
                    </p>    
                </div>
            </div>
            <div class="col-1">

            </div>

            <div class="total-cost pt-2 text-right">
                <h5> Total da Compra : R$ {{totalCost}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'OrderItems',
    props: ["orderID", "baseURL"],

    data() {
        return {
            lengthofOrderItems:0,
            totalCost: "",
            orderProducts: [],
            products: [],
            token: null
        }
    },

    methods: {
        getTheProducts() {
            axios.get(`${this.baseURL}order/${this.orderID}?token=${this.token}`).token((response) => {
                if (response.status === 200) {
                    this.product = response.data
                    this.lengthofOrderItems = Object.keys(this.product.orderItems).length
                    this.totalCost = this.product.totalPrice
                    this.product.orderItems.forEach(item => {
                        this.orderProducts.push({
                            imgUrl: item.product.imageURL,
                            pName: item.product.name,
                            pDescription: item.product.description,
                            pPrice: item.product.price,
                            pQuantity: item.quantity
                        })
                    });
                }
            },
            (error) => {
                console.log(error)
            })
        }
    },

    beforeMount() {
        this.token = localStorage.getItem("token")
        this.getTheProducts()
    }
}
</script>

<style scoped>
h4 {
    font-family: 'Roboto', sans-serif;
    color: #484848;
    font-weight: 700;
}

.embed-responsive .card-img-top {
    object-fit: cover;
}
</style>