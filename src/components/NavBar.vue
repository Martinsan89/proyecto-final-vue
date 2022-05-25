<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light navbar-color">
          <div class="container-fluid">
              <a href="#" class="navbar-brand"><h1>LoRun</h1></a>
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
      </div>
  </div>
</template>

<script>
import Carrito from '../components/carrito/Carrito.vue'
export default {
  name: "NavBar",
  components: {
    Carrito
  },
  data() {
    return {
      ventana: false
      }
    },
      props:{
        productosNavBar: {
          type: Array,
        }
      },
  methods: {
    VaciarCarrito(){
      this.$emit('vaciar-productos', {}),
      this.ventana = false;
    }
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

