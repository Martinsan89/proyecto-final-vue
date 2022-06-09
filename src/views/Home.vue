<template>
  <div class="home">
    <NavBar></NavBar>
    <div class="text-center mx-4">
      <router-link to="/UserLogin" class="btn btn-success">Login</router-link>
      <router-link to="/FormLogin" class="btn btn-success">Registrate</router-link>
    </div>
    <br>
    <Productos
      v-for="producto in getProductosLista"
      :key="producto.id"
      :producto="producto">
    </Productos>
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
   created(){
    this.toProductosLista();
  },
  mounted(){
    this.toSetCarrito();
  },
  computed: {
    ...mapGetters(['getProductosLista'])
  },
  methods: {
    ...mapActions(['toProductosLista']),
    ...mapActions('carrito',['toSetCarrito']),
  }
}
</script>

<style scoped>
.home {
  background-color: grey;
}

</style>
