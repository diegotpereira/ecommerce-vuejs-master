import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

//Signin and Signup
import Signin from '../views/Signin.vue'
import Signup from "../views/Signup.vue";


//Admin routes
import Admin from "../views/Admin/Admin.vue";


import Product from "../views/Product/Product.vue";
import Wishlist from "../views/Product/Wishlist.vue";


import Category from "../views/Category/Category.vue";

// Pedidos Rota
import Order from "../views/Order/Order.vue";

// Carrinho Rota
import Cart from "../views/Cart/Cart.vue";

const routes = [
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  //Signin and Signup
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  //Admin routes
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
{
    path: "/about",
    name: "About",
      component: About,
  },
  // Produto Rotas
  {
    path: "/product",
    name: "Product",
    component: Product,
  },

  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist
  },

  // Categoria Rotas

  {
    path: '/category',
    name: "Category",
    component: "Category",
  },

  // Pedidos Rota
  {
    path : '/order',
    name : 'Order',
    component : Order
  },

  // Carrinho Rota
  {
    path : '/cart',
    name : 'Cart',
    component : Cart
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;