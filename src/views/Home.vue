<template>
  <div class="home">
    <NavBar
    :productosNavBar="productosAlCarrito"

    @vaciar-productos="vaciarProductos"
    ></NavBar>
    <br>
    <h3 class="text-success">Hola {{usuario.cliente.nombre}}</h3>
    <Productos
      v-for="producto in productosLista"
      :key="producto.id"
      :producto="producto"
       @agregar-al-carrito="AgregarAlNavBar">
    </Productos>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Productos from '../components/Productos.vue';

const axios = require('axios');
export default {
  name: 'Home',
  components: {
    Productos, NavBar
  },
  data: () => ({
    productosLista: [],
    productosAlCarrito:[],
  }),
  props: {
      usuario: {
      type: Object,
      required: true
    }
  },
   mounted(){
    this.getProductos();
    this.getCarrito();
  },
  methods: {
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
      localStorage.setItem('carrito', JSON.stringify(this.productosAlCarrito));
    },
    vaciarProductos(){
      this.productosAlCarrito = [];
    },
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
      getCarrito(){
      this.productosAlCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    }
  }
}
</script>

<style scoped>
.home {
  background-color: grey;
}

</style>
