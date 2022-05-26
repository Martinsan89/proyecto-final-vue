<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light navbar-color">
          <div class="container-fluid">
              <router-link to="/" class="navbar-brand"><h1>LoRun</h1></router-link>
               <router-link to="/UserLogin" class="btn btn-success">Login</router-link>
               <!-- <div v-if="UsarioData">
                 <h3>{{UsuarioData.nombre}}</h3>
               </div> -->
              <router-link to="/FormLogin" class="btn btn-success">Registrate</router-link>
              <div class="navbar-nav">
                  <button @click="ventana = true" class="btn btn-primary" ><span>{{productosCounter}}</span></button>
              </div>
          </div>
      </nav>
      <div v-if="this.ventana">
        <button class="btn btn-success"
        @click.prevent="ventana=false">Cerrar</button>
            <button class="btn btn-danger" @click.prevent="VaciarCarrito">Vaciar Carrito</button>
        <Carrito
        :productosAlCarrito="productosNavBar"
        >
        </Carrito>
        <!-- <UserLogin
        @user-data="UsuarioInfoData"
        /> -->
      </div>
  </div>
</template>

<script>
// import UserLogin from '../views/Login/UserLogin.vue'
import Carrito from '../components/carrito/Carrito.vue'
export default {
  name: "NavBar",
  components: {
    Carrito
  },
  data() {
    return {
      ventana: false,
      }
    },
      props:{
        productosNavBar: {
          type: Array,
        }
      },
  // mounted: {
  //   UsuarioData: {
  //     type: Array
  //   }
  // },
  methods: {
    VaciarCarrito(){
      this.$emit('vaciar-productos', {}),
      this.ventana = false;
    },
    // UsuarioInfoData(data){
    //   const userData = [... data]
    //   this.UsuarioData.push(userData);
    //   console.log(userData);
    // }
    },
  computed:{
    productosCounter(){
      return this.productosNavBar.length;
    },

  },
}

</script>

<style scoped>
.navbar {
    background-color: burlywood;
    margin-bottom: 2rem;
}

</style>

