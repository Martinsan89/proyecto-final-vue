<template>
  <div class="userview">
    <div v-if="userLogged != null">
      <br>
      <h3 class="text-center text-dark">Hola {{userLogged.nombre}}!</h3>
      <div class="text-center mb-3">
        <button
        @click="verCompras"
        type="button"
        class="btn btn-secondary text-center"
        >Ver Compras</button>
        <router-link class="btn btn-danger text-center" v-if="userLogged.isAdmin" :to="{name: 'Admin'}">Ir a ediciones</router-link>
      </div>

      <br>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'InfoUsuario',
  created(){
    this.toSetCarrito();
  },
   mounted(){
    this.getCarrito;
  },
  computed: {
    ...mapState('users',['userLogged'])
  },
  methods: {
    ...mapActions('carrito',['toSetCarrito']),

    verCompras() {
      this.$router.push('/UsuarioCompras');
    },
  }
}
</script>

<style scoped>
.btn{margin: 0 10px;}
.userview {
  background-color: #8eb5a1;
  height: 120px;
}
</style>
