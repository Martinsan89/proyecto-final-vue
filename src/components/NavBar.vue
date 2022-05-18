<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light navbar-color">
          <div class="container-fluid">
              <a href="#" class="navbar-brand"><h1>LoRun</h1></a>
              <div class="navbar-nav">
                  <button class="btn btn-danger" ><span>{{productosTotal.length}}</span></button>
              </div>
          </div>
      </nav>
      <!-- <Carrito
      v-modal="showModal"
      :cart="cart"
      ></Carrito> -->
  </div>
</template>

<script>
// import Carrito from './carrito/Carrito.vue'
// import { $vfm } from 'vue-final-modal'

export default {
    name: "NavBar",
    // components: {
    //     Carrito
    // },
    props:{
        producto: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            productosTotal: []
        }
    },
    methods: {
        contadorCarrito(producto){
                 this.productosTotal.push(producto);
                 console.log(this.productosTotal);
        }
    }
}

</script>

<style>
.navbar {
    background-color: burlywood;
    margin-bottom: 2rem;
}

</style>

computed
 let i = this.productosTotal.findIndex((prod) => prod.id == productosEnCarrito.id);
            if (i >=0) this.productosTotal[i].cantidad +=1;
            else {
                producto.cantidad = 1;
                this.productosTotal.push(producto);
            }
