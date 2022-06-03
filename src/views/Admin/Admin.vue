<template>
  <div>
    <div class="titulo">
      <h1 class="text-center">Cuenta de administracion de productos</h1>
      <div class="btns text-center">
        <button class="btn btn-primary" @click.prevent="stock=true, zapatilla = false">
        <h3>Stock</h3></button>
        <button class="btn btn-info"
        @click.prevent="zapatilla=true, stock=false">
        <h3>Zapatilla</h3></button>
      </div>
    </div>
    <div v-if="stock">
      <Stock
      :productoLista="productoLista"
      >
      </Stock>
    </div>
    <div v-if="zapatilla">
      <Zapatilla>
      </Zapatilla>
    </div>
  </div>
</template>

<script>
import Stock from '../../components/Adim/Stock.vue';
import Zapatilla from '../../components/Adim/Zapatilla.vue';


const axios = require('axios');


export default {
  name: "Admin",
  components: {
    Stock, Zapatilla
  },
  data: () => ({
    productoLista: [],
    stock: false,
    zapatilla: false
  }),
  mounted(){
    this.getProductos(),
    this.RedirectToLoginIfLoggedUserIsNotAdmin()
  },
  methods: {
    async getProductos(){
      await axios.get(`${process.env.VUE_APP_API_URL}/api/producto`)
      .then(response => {
        return response.data;
      })
      .then(data => {
        this.productoLista = data;
      })
      .catch(err => {console.log(`${err}`)});
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
