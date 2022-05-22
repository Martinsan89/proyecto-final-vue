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
            <button class="btn btn-danger" @click.prevent="VaciarCarrito">Vaciar Carrito</button>
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
                <th scope="col" colspan="1">{{producto.quantity}}</th>
                <th scope="col">{{producto.precio}}</th>
                <th scope="col">{{producto.total}}</th>
            </tr>
        </tbody>

        <tfoot>
            <td scope="col" colspan="10"></td>
            <td scope="col" ></td>
            <td scope="col" ><h4>Cantidad total:{{totalQuantity}}</h4></td>
            <td scope="col"><h5>Precio Total: ${{totalFinal}}</h5></td>
        </tfoot>
    </table>
      </div>
  </div>
</template>

<script>

export default {
    name: "NavBar",
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
    methods: {
      VaciarCarrito(){
        return this.producto.length = 0;
      }
    },
    computed:{
        productosCounter(){
          return this.producto.length
        },
        totalQuantity(){
          return this.producto.reduce((acc, item) => acc + item.quantity, 0)
        },
        totalFinal(){
          return this.producto.reduce((acc, item) => acc + item.total, 0)
        },


    }
}

</script>

<style scoped>
.navbar {
    background-color: burlywood;
    margin-bottom: 2rem;
}

</style>

