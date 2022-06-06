<template>
  <div class="container">
    <div class="col-4">
      <div class="row">
        <div class="card text-center" v-for="producto in productosLista"
        :key="producto.id">
          <img class="card-img-top"
          :src="producto.img"
          :alt="producto.modelo">
          <div class="card-body">
            <h5 class="card-title text-dark">{{producto.marca}}</h5>
            <p class="card-text text-dark">{{producto.modelo}}</p>
            <p class="card-text text-dark">Weight: {{producto.peso}}</p>
            <p class="card-text text-dark">${{producto.precio}}</p>
            <button class="btn btn-dark"  @click="toProductosAlCarrito(producto.id)" >Agregar al carrito</button>
            <span v-if="ventana" class="mt-2">
              <h4 class="text-success text-center mt-2">Producto agregado!</h4>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name:"Productos",
    data(){
      return {
        ventana: false
      }
    },
    // props: {
    //     producto: {
    //         type: Object,
    //         required: true
    //     }
    // },
    computed: {
      ...mapGetters(['productosLista'])
    },
    methods: {
      //  AgregarAlCarrito() {
      //       this.$emit("agregar-al-carrito", this.producto.id);
      //       this.ventana = true;
      //   }
      ...mapActions(['toProductosAlCarrito'])
    }

}
</script>

<style scoped>
/* .card {
    border-radius: 3rem;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
} */
.btn:hover {
    background-color: white;
    color: black;

}

</style>
