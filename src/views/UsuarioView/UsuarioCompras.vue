<template>
  <div class="listaCompras">
    <router-link class="btn btn-dark mx-3"
    to="/UsuarioView"
    >Volver</router-link>
    <h3 class="text-center text-primary">Compras Realizadas</h3>
    <table class="table table-striped table-bordered">
      <thead class="text-dark">
        <tr>
          <th scope="col" colspan="10">Productos</th>
                <th scope="col" colspan="1">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr class="producto" v-for="producto in productosLista" :key="producto.id">
          <th class="text-dark" scope="col" colspan="10">{{producto.marca}} {{producto.modelo}}</th>
          <th class="text-dark" scope="col" colspan="1">
          {{producto.quantity}}
          </th>
          <th class="text-dark" scope="col">{{producto.precio}}</th>
          <th class="text-dark" scope="col">{{producto.total}}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: "UsuarioCompras",
  data(){
    return{
      productosLista: [],
      user: null
    }
  },
  mounted(){
    this.$forceUpdate();
    this.getUser();
    this.getCompras();
  },
  methods: {
    getUser(){
      this.user = JSON.parse(localStorage.getItem('UsuarioGuardado')) || [];
    },
    async getCompras(){
      await axios.get(`${process.env.VUE_APP_API_URL}/api/corredor/${this.user.id}/compras`)
      .then(response => {
        return response.data;
      })
      .then(data => {
        this.productosLista = data;
      })
      .catch(err => {console.log(`${err}`)});
    }
  }
}
</script>

<style scoped>
.listaCompras {
  background-color: #9fd0fb;
}

</style>
