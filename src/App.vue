<template>
<div>
  <router-view />
  <NavBar
  :productosNavBar="productosAlCarrito"
  @vaciar-productos="vaciarProductos"
  ></NavBar>
  <Productos
    v-for="producto in productosLista"
    :key="producto.id"
    :producto="producto"
    @agregar-al-carrito="AgregarAlNavBar"
  >
  </Productos>
</div>
</template>


<script>
// import UserLogin from './components/LogIn/UserLogin.vue';
import Productos from './components/Productos.vue';
import NavBar from './components/NavBar.vue'

const axios = require('axios');


export default {
  name: 'App',
  components: {
    Productos, NavBar
  },
  data: () => ({
      productosLista: [],
    productosAlCarrito:[],
  }),
  mounted(){
    this.getProductos()
  },
  methods:{
    async getProductos(){
      await axios.get(`${process.env.VUE_APP_API_URL}/api/producto`)
      .then(response => {
        return response.data;
      })
      .then(data => {
        this.productosLista = data;
      })
      .catch(err => {console.log(`${err}`)});
      // .finally(() => {console.log("finalizo la peticion de datos")})

    },
    AgregarAlNavBar(productoId){
      const prodEnCarrito = this.productosAlCarrito.find(product => product.id === productoId);

      if(prodEnCarrito){
          prodEnCarrito.quantity++;
          prodEnCarrito.total = prodEnCarrito.quantity * prodEnCarrito.precio;
      } else {
          const findProduct = this.productosLista.find(product => product.id === productoId);
          const nuevoProd = {...findProduct};

          this.productosAlCarrito.push({
            ...nuevoProd,
            quantity: 1,
            total: nuevoProd.precio
          });
      }
    },
    vaciarProductos(){
      this.productosAlCarrito = [];
    }
  }
}
</script>

<style>
body {
    background-color: beige;
}
</style>



