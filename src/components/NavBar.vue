<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light navbar-color">
          <div class="container-fluid">
             <router-link to="/" class="navbar-brand"><h1>LoRun</h1></router-link>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#carritoModal"><span>{{productosCounter}}</span></button>
            <!-- Modal -->
            <div class="modal fade" id="carritoModal" tabindex="-1" role="dialog" aria-labelledby="carritoModalTitulo" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="carritoModalTitulo" id="carritoModalTitulo">Carrito LoRun</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true"></span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <button class="btn btn-danger" @click.prevent="VaciarCarrito">Vaciar Carrito</button>
                    <Carrito
                    :productosAlCarrito="productosNavBar"
                    @vaciar-table='VaciarTable'
                    >
                    </Carrito>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </nav>
  </div>
</template>

<script>
import Carrito from '../components/carrito/Carrito.vue'
export default {
  name: "NavBar",
  components: {
    Carrito
  },
  props:{
    productosNavBar: {
      type: Array,
    }
  },
  methods: {
    VaciarCarrito(){
      localStorage.removeItem('carrito');
      this.$emit('vaciar-productos', {});
    },
    VaciarTable(){
      this.$emit(this.$emit('reset-table', {}))
    },
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

