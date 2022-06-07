<template>
  <div class="container">
    <div class="col-4">
      <div class="row">
        <div class="card text-center" v-for="producto in getProductosLista"
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
import { mapGetters, mapActions } from 'vuex';
export default {
    name:"Productos",
    data(){
      return {
        ventana: false
      }
    },
    created(){
      this.toProductosLista();
    },
    mounted(){
      this.getProductosLista;
      console.log(this.getProductosLista);
    },
    computed: {
      ...mapGetters(['getProductosLista'])
    },
    methods: {
      ...mapActions(['toProductosLista'])
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
