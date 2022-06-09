<template>
  <div>
    <button class="btn btn-dark mx-3"
    @click="Volver"
    >Volver</button>
    <div class="titulo">
      <h1 class="text-center">Cuenta de administracion de productos</h1>
      <div class="btns text-center">
        <button class="btn btn-primary" @click.prevent="stock=true, zapatilla = false">
        <h3>Stock</h3></button>
        <router-link class="btn btn-info"
        to="/Zapatilla">
        <h3>Zapatilla</h3></router-link>
      </div>
    </div>
    <div v-if="stock">
      <Stock
      :productoLista="productoLista"
      >
      </Stock>
    </div>
  </div>
</template>

<script>
import Stock from '../../components/Adim/Stock.vue';


const apiCall = 'https://628e2cc9a339dfef87a8fd8c.mockapi.io';
const axios = require('axios');


export default {
  name: "Admin",
  components: {
    Stock,
  },
  data: () => ({
    stock: false,
  }),
  mounted(){
    this.getProductos(),
    this.RedirectToLoginIfLoggedUserIsNotAdmin;
  },
  methods: {
    async getProductos(){
      await axios.get(`${apiCall}/api/producto`)
      .then(response => {
        return response.data;
      })
      .then(data => {
        this.productoLista = data;
      })
      .catch(err => {console.log(`${err}`)});
    },
    Volver() {
      localStorage.clear();
      this.$router.push('/');
    }
  }
}
</script>

<style>
body {
  background-color: grey;
  color: bisque;
}
.titulo {
  margin: auto;
}
</style>
