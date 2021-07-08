import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Signin from '../views/Signin.vue'
import Admin from "../views/Admin/Admin.vue";


import Product from "../views/Product/Product.vue";
import Wishlist from "../views/Product/Wishlist.vue";


import Category from "../views/Category/Category.vue";

const routes = [
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;