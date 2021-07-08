<template>
     <navbar />
     <div style="min-height: 60vh">
       <router-view v-if="products">
         :baseURL="baseURL"
         :products="products"
         @fetchData = "fetchData"
         @refreshNav = "refreshNav"
       </router-view>
     </div>
     <Footer />
</template>



<script>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
export default {
  data() {
    return {
      baseURL : "https://limitless-lake-55070.herokuapp.com/",
      //baseURL : "http://localhost:8080/api/",
      products : null,
      categories : null,
      key : 0
    }
  },
  
  components : { Footer , Navbar},
  
   
}
</script>