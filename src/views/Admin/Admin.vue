<template>
  <div>
    <router-link class="btn btn-dark mx-3" :to="{name: 'Home'}">Volver</router-link>
    <div class="titulo">
      <h1 class="text-center">Cuenta de administracion de productos</h1>
      <div class="btns text-center">
        <button class="btn btn-primary p-3" @click.prevent="stock=true, zapatilla = false">
        <h3>Actualizar</h3></button>
        <router-link class="btn btn-info p-3"
        to="/Zapatilla">
        <h3>Agregar</h3></router-link>
        <router-link to="/DataUsers" class="btn btn-success p-3"><h3>
          Ver usuarios </h3></router-link>
      </div>
    </div>
    <div v-if="stock">
      <Stock />
    </div>
  </div>
</template>

<script>
import Stock from '../../components/Adim/Stock.vue';
import {mapGetters} from 'vuex';

export default {
  name: "Admin",
  components: {
    Stock,
  },
  data: () => ({
    stock: false,
  }),
  created(){
    this.getUserLogged;
  },
  mounted(){
    if(!this.getUserLogged){
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters('users',['getUserLogged'])
  },
  methods: {
    Volver() {
      localStorage.clear();
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
body {
  background-color: grey;
  color: #e69c40;
}
.titulo {
  margin: auto;
}
</style>
