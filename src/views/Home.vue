<template>
  <div class="home">
    <div class="nav">
      <NavBar />
    </div>
    <div class="login">
      <UserLogin />
    </div>
    <div class="productos">
      <Productos />
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import UserLogin from '@/components/Login/UserLogin.vue';
import Productos from '../components/Productos.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    Productos, NavBar, UserLogin
  },
  mounted(){
    this.toSetCarrito();
  },
  methods: {
    ...mapActions('carrito',['toSetCarrito']),
  }
}
</script>

<style scoped>
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
.UserLogin {
  position: absolute;
  right: 0rem;
}
.productos {
  position: absolute;
  top: 25rem;
  right: 8rem;
}
</style>
