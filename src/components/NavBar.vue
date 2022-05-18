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
      <div v-bind="ventana" v-if="ventana">
      <table class="table">
        <thead>
            <button class="btn btn-success" @click.prevent="ventana=false">Cerrar</button>
            <!-- <button class="btn btn-danger" @click.prevent="VaciarCarrito()">Vaciar Carrito</button> -->
            <!-- <input @click.prevent="ventana=false" type="button" value="Cerrar"> -->
            <tr>
                <th scope="col" colspan="10">Productos</th>
                <th scope="col" colspan="1">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="producto in producto" :key="producto.id">
               <th scope="col" colspan="10">{{producto.marca}} {{producto.modelo}}</th>
                <th scope="col" colspan="1">1</th>
                <th scope="col">{{producto.precio}}</th>
                <th scope="col">Total</th>
            </tr>
        </tbody>

        <tfoot>
            <td scope="col" colspan="10"></td>
            <td scope="col" colspan="1"></td>
            <td><h4>Total:</h4></td>
            <td><h5>Total:</h5></td>
        </tfoot>
    </table>
      </div>
  </div>
</template>

<script>
// import Carrito from './carrito/Carrito.vue'

export default {
    name: "NavBar",
    // components: {
    //     Carrito
    // },
    props:{
        producto: {
            type: Array,
        }
    },
    data() {
        return {
            ventana: false
        }
    },
    // methods: {
    //     VaciarCarrito(){
    //         return this.table.reset();
    //     }
    // },
    computed:{
        productosCounter(){
            return this.producto.length
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

productosAlCarrito(){
            return this.producto.map((prod) => ({
                precio: prod.precio,
                marca: prod.marca,
                modelo: prod.modelo
            }))

        }
