import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

//Signin and Signup
import Signin from '../views/Signin.vue'
import Signup from "../views/Signup.vue";


//Admin routes
import Admin from "../views/Admin/Admin.vue";

// Produto Rotas
import AddProduct from "../views/Product/AddProduct.vue";
import Product from "../views/Product/Product.vue";
import Wishlist from "../views/Product/Wishlist.vue";
import ShowDetails from "../views/Product/ShowDetails.vue";
import EditProduct from "../views/Product/EditProduct.vue";



// Pedidos Rota
import Order from "../views/Orders/Order.vue";
import OrderItemView from "../views/Orders/OrderItemView.vue";


// Carrinho Rota
import Cart from "../views/Cart/Cart.vue";


// Categoria Rotas
import Category from "../views/Category/Category.vue";
import ListProducts from "../views/Category/ListProducts.vue";
import EditCategory from "../views/Category/EditCategory.vue";
import AddCategory from "../views/Category/AddCategory.vue";

//
import Checkout from "../views/Checkout/Checkout.vue";

import Success from "../helper/payment/Success.vue";
import Failed from "../helper/payment/Failed.vue";

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
    path: '/product/show/:id',
    name: 'ShowDetails',
    component: ShowDetails
  },

  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct,
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },

  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist
  },

  // Carrinho Rota
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },

  // Categoria Rotas

  {
    path: '/category',
    name: 'Category',
    component: Category,
  },

  {
    path: '/admin/category',
    name: 'AdminCategory',
    component: Category
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },

  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path: '/category/show/:id',
    name: 'ListProducts',
    component: ListProducts
  },
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },

    // Pedidos Rota
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
    path:'/order/:id', 
    name:'OrderItemView',
    component:OrderItemView
  },

  // Rota Checkout
  {
    path : '/checkout',
    name : 'Checkout',
    component : Checkout
  },

  {
    path: '/payment/success',
    name: 'PaymentSuccess',
    component:Success
  },
  {
    path: '/payment/failed',
    name: 'FailedPayment',
    component:Failed
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//scroll to top after every route change
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;