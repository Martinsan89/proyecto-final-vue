<template>
  <div class="home">
    <!-- <NavBar
    :productosNavBar="productosAlCarrito"
    @vaciar-productos="vaciarProductos"
    ></NavBar> -->
    <NavBar></NavBar>
    <div class="text-end mx-4">
      <!-- <router-link to="/Admin"
      class="btn btn-success">Admin</router-link> -->
      <router-link to="/UserLogin" class="btn btn-success">Login</router-link>
      <router-link to="/FormLogin" class="btn btn-success">Registrate</router-link>
    </div>
    <br>
    <Productos></Productos>
    <!-- <Productos
      v-for="producto in productosLista"
      :key="producto.id"
      :producto="producto"
       @agregar-al-carrito="AgregarAlNavBar">
    </Productos> -->
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Productos from '../components/Productos.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Productos, NavBar
  },
   async created(){
    this.toProductosLista;

  },
  mounted(){
    this.getProductosLista;
    this.toSetCarrito;
  },
  computed: {
    ...mapGetters(['getProductosLista'])
  },
  methods: {
    ...mapActions(['ToSetCarrito', 'toProductosLista']),
  }
}
</script>

<style scoped>
.home {
  background-color: grey;
}

</style>
