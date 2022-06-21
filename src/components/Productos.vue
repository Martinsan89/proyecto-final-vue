<template>
  <div class="container" >
    <div class="row" v-for="(producto, index) in getProductosLista" :key="index">
      <div class="card" >
        <div class="card-body">
          <div class="face front">
            <img class="card-img-top"
            :src="producto.img"
            :alt="producto.modelo">
            <h5 class="card-title text-dark">{{producto.marca}}</h5>
            <p class="card-text text-dark">{{producto.modelo}}</p>
          </div>
          <div class="face back">
            <p class="card-text text-dark">{{producto.marca}} {{producto.modelo}}</p>
            <p class="card-text text-dark">Weight: {{producto.peso}}</p>
            <p class="card-text text-dark">Drop: {{producto.drop}}</p>
            <p class="card-text text-dark">Precio ${{producto.precio}}</p>
            <p class="card-text text-dark"> Stock: {{producto.stock}}</p>
            <div class="contador">
            <button @click="Restar(producto)">-</button>
            <p> {{producto.quantity}} </p>
            <button @click="Sumar(producto)">+</button>
            </div>
            <button class="btn btn-dark text-center"  @click="ProductoAlCarrito(producto)" >Agregar al carrito</button>
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
  created(){
    this.toProductosLista();
  },
  computed: {
    ...mapGetters(['getProductosLista']),
  },
  methods: {
    ...mapActions(['toProductosLista','toSetSumarQuantity', 'toSetRestarQuantity']),
    ...mapActions('carrito',['toProductosEnCarrito']),

    ProductoAlCarrito(producto){
      this.toProductosEnCarrito(producto);
      this.$toastr.success('Producto agregado!');
    },
    Sumar(producto) {
      this.toSetSumarQuantity(producto);
    },
    Restar(producto){
      this.toSetRestarQuantity(producto);
    }
  }
}
</script>

<style scoped>
.btn:hover {
  background-color: white;
  color: black;
}
.container {
  display: flex;
  flex-wrap: wrap;
}
.row {
  border-style: none;
}
.contador{
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 1rem;
}
.card {
  background-color: grey;
  border-style: none;
}
.card .face {
  backface-visibility: hidden;
  overflow: hidden;
  transition: .5s;
}
.card .front{
  transform: perspective(600px) rotateY(0deg);
  box-shadow: 0 5px 10px #000;
}
.card .front img{
  width: 100%;
  height: 70%;
  object-fit: cover;
}
.card .front h5 {
    width: 100%;
    height: 45px;
    line-height: 45px;
    color: #fff;
    background: #9df09466;
    text-align: center;
}
.card .front p {
    color: #fff;
    background: #9df09466;
    text-align: center;
}
.card .back {
  transform: perspective(600px) rotateY(180deg);
  flex-direction: column;
  background-color: #9df09466;
  text-align: center;
}
.card:hover .front {
  transform: perspective(600px) rotateY(180deg);
}
.card:hover .back {
  transform: perspective(600px) rotateY(360deg);
}
</style>
