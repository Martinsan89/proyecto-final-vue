<template>
  <div class="userview">
    <NavBar></NavBar>
    <div class="text-center mb-3">
      <button class="btn btn-warning mx-5"
      @click="DropUser"
      > Log out</button>
      <button
      @click="verCompras"
      type="button"
      class="btn btn-secondary text-center"
      >Ver Compras</button>
    </div>
    <h3 class="text-center text-dark">Hola {{getUserLogged.nombre}}!</h3>
    <br>
    <Productos />
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import Productos from '../../components/Productos.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'UsuarioView',
  components: {
    Productos, NavBar
  },
  created(){
    this.toSetUserLogged();
    this.toSetCarrito();
  },
   mounted(){
    this.getCarrito;
    this.getUserLogged;
  },
  computed: {
    ...mapGetters('users',['getUserLogged'])
  },
  methods: {
    ...mapActions('carrito',['toSetCarrito']),
    ...mapActions('users',['toSetUserLogged']),

    verCompras() {
      this.$router.push('/UsuarioCompras');
    },
    DropUser(){
      this.$router.push("/");
      localStorage.clear();
    }
  }
}
</script>

<style scoped>
.userview {
  background-color: #8eb5a1;
}
</style>
