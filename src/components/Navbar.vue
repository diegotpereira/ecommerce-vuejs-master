<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" :to="{name : 'Home'}">
      <img id="logo" src="" />
    </router-link>
  </nav>

</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      token: null
    }
  },

  methods: {
    signout() {
      localStorage.removeItem('token');
      this.token = null;
      this.$router.push({ name: 'Home'});

      swal({
        text: "Você sai da conta. Entre novamente",
        icon: "success",
        closeOnClickOutSide: false,
      });
    }
  },

  mounted() {
    this.token = localStorage.getItem('token');
  }
}
</script>

<style scoped>
#logo {
  width: 150px;
  margin-left: 20px;
  margin-right: 20px;
}

.vav-link {
  color: rgba(255, 255, 255, 255);
}

#search-button-navbar {
  background-color: #febd69;
  border-color: #febd69;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
</style>