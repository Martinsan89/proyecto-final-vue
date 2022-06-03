<template>
  <div class="userview">
    <NavBar
    :productosNavBar="productosAlCarrito"
    @vaciar-productos="vaciarProductos"
    @reset-table="vaciarTable"
    >
    </NavBar>
    <div class="text-end">
      <button class="btn btn-warning mx-3"
      @click="dropUser"
      > Log out</button>
      <button @click="verCompras"
      type="button"
      class="btn btn-secondary text-center"
      >Ver Compras</button>
    </div>
    <h3 class="text-center text-dark">Hola {{user.nombre}}!</h3>
    <br>
    <Productos
      v-for="producto in productosLista"
      :key="producto.id"
      :producto="producto"
       @agregar-al-carrito="AgregarAlNavBar">
    </Productos>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import Productos from '../../components/Productos.vue';

const axios = require('axios');
export default {
  name: 'Home',
  components: {
    Productos, NavBar
  },
  data: () => ({
    productosLista: [],
    productosAlCarrito:[],
    user: []
  }),
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
    vaciarTable(){
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
      this.user = JSON.parse(localStorage.getItem('UsuarioGuardado')) || [];
    },
    dropUser(){
      localStorage.removeItem('UsuarioGuardado');
      this.$router.push('/');
    },
    verCompras() {
      this.$router.push('/UsuarioCompras');
    }

  }
}
</script>

<style scoped>
.userview {
  background-color: #18b466;
}
</style>
