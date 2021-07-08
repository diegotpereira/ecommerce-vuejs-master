<template>
    <!-- Page Wrapper -->
    <div id="background-div" class="page-holder bg-cover">
        <div class="container py-5">
            <header class="text-left text-white py-5">
                <h3 class="mb-4 rounded"><a href="#start-shopping" class="bg-white px-2 py-2 rounded" id="heading">Comece a comprar</a></h3>
                <p id="content" class="lead mb-0 bg-dark p-1 rounded">aplicativo de comércio eletrônico completo com back-end e front-end para Web e Android</p>
            </header>
        </div>
    </div>

    <div id="start-shopping" class="container">
        <div class="row">
            <div class="col-12 text-left">
                <h2 class="pt-3">Principais categorias</h2>
            </div>
        </div>
        <div class="row">
            <div v-for="index in this.category_size" :key="index" class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
                <categoryBox :category="categories[index-1]">

                </categoryBox>
            </div>
        </div>
    </div>

    <hr>
    <div class="container">
        <div class="row">
            <div class="col-12 text-left">
                <h2 class="pt-3">Principais Produtos</h2>
            </div>
        </div>

        <div class="row">
            <div v-for="index in this.product_size" :key="index" class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
                <productBox :product="products[index-1]"></productBox>
            </div>
        </div>
    </div>
</template>

<style>
    .page-holder {
        min-height: 100vh;
    }

    .bg-cover {

        background-size: cover !important;
    }

    #background-div {

    }

    #heading {
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        opacity: 0.8;
        font-family: 'Josefin Sans', sans-serif;
    }

    #content {
        opacity: 0.8;
    }

    h2 {
        font-family: 'Josefin Sans', sans-serif;
    }
</style>