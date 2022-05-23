<template>
  <UserLogin></UserLogin>
  <router-view />
  <router-link to="/Route1">Route1</router-link>
  <NavBar
  :producto="productosEnCarrito"
  ></NavBar>
  <Productos
    v-for="producto in productosLista"
    :key="producto.id"
    :producto="producto"
    @agregar-al-carrito="AgregarAlNavBar"
  >
  </Productos>
</template>


<script>
import UserLogin from './components/LogIn/UserLogin.vue';
import Productos from './components/Productos.vue';
import NavBar from './components/NavBar.vue'


export default {
  name: 'App',
  components: {
    UserLogin, Productos, NavBar
  },
  data: () => ({
      productosLista: [    {
		    id: 1,
		    marca: "Reebok",
        modelo: "Floatride Energy 3",
        peso: "241g",
        precio: 24100,
        drop: "9mm",
        img: "reebok-floatride.jpeg"
    },
    {
        id: 2,
        marca: "Saucony",
        modelo: "Endorphin Speed 2",
        peso: "227g",
        precio: 22700,
        drop: "8mm",
        img: "saucony-endorphin.jpeg"
    },
    {
        id: 3,
        marca: "Under Armour",
        modelo: "Flow Velociti Wind",
        peso: "229g",
        precio: 22900,
        drop: "8mm",
        img: "under-armour-micro.jpeg"
    },
    {
        id: 4,
        marca: "Adidas",
        modelo: "AdizeroBoston 10",
        peso: "294g",
        precio: 29400,
        drop: "7mm",
        img: "adidas-adizero.jpeg"
    },
    {
        id: 5,
        marca: "Nike",
        modelo: "React Infinity Run Flyknit 2",
        peso: "302g",
        precio: 30200,
        drop: "7mm",
        img: "nike-react.jpeg"
    }],
    productosEnCarrito:[],
  }),
  methods:{
    AgregarAlNavBar(productoId){
      const prodEnCarrito = this.productosEnCarrito.find(product => product.id === productoId)

      if(prodEnCarrito){
          prodEnCarrito.quantity++;
          prodEnCarrito.total = prodEnCarrito.quantity * prodEnCarrito.precio;
      } else {
          const findProduct = this.productosLista.find(product => product.id === productoId);
          const nuevoProd = {...findProduct};

          this.productosEnCarrito.push({
            ...nuevoProd,
            quantity: 1,
            total: nuevoProd.precio
          })
      }
    }
  }
}
</script>

<style>
#app {
    background-color: #b7b7b7;
}
</style>

<!-- :producto="item" -->

// import axios from "axios"

    //   mounted(){
    //       this.getProducts()
    //   },
    //   methods: {
    //       async getProducts (){
    //           const url = '/products.json';

    //           try {
    //               const res = await axios.get(url)
    //               this.productos = await res.data
    //               console.log(productos);
    //           } catch (err) {console.log(error)}
    //       }
    //   }
