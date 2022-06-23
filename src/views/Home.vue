<template>
  <div class="home">
    <div class="nav">
      <NavBar />
    </div>

    <button v-if="userLogged != null" class="btn btn-warning btnLogOff" @click="LogOff">Log Off</button>
    <router-link v-else class="btn btn-warning btnLogOff" :to="{name: 'Login'}">Login</router-link>

    <InfoUsuario />

    <div class="productos">
      <Productos />
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Productos from '../components/Productos.vue';
import InfoUsuario from '../components/InfoUsuario.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    Productos, NavBar, InfoUsuario
  },
  mounted(){
    this.toSetCarrito();
  },
  computed:{
    ...mapState("users", ["userLogged"]),
  },
  methods: {
    ...mapActions('carrito',['toSetCarrito']),
    ...mapActions("users", ["LogOff"]),
  }
}
</script>

<style scoped>
.btnLogOff{
  position:absolute;
  right: 10px;
  top:10px;
}
.home {
  position: relative;
  height: max-content;
  background-color: gray;
}
.nav {
  position: absolute;
  top: 1rem;
  left: 2rem;
}
.NavBar {
  width: 10%;
}
.login {
  width: 60%;
}
.FormLogin {
  position: absolute;
  right: 0rem;
}
</style>
