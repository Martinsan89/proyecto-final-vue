<template>
  <div>
    <div class="titulo">
      <h1 class="text-center">Actualizacion de stock y precio </h1>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Producto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{this.$route.params.producto.marca,}} {{this.$route.params.producto.modelo}}</td>
          <td>
            <button @click.prevent="Delete" class="btn btn-danger">Delete</button>
          </td>
          <td>
            <router-link to="/Admin"
            class="btn btn-success">Admin
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <div v-if="ventana">
      <h3 class="text-center">Registro eliminado!</h3>
    </div> -->

  </div>
</template>

<script>
const apiCall = 'https://628e2cc9a339dfef87a8fd8c.mockapi.io';
const axios = require('axios');

export default {
  name: 'Update',
  data: () => ({
    stock: 0,
    precio: 0,
    ventana: false
  }),
  methods: {
  async Delete(){
    await axios.delete(`${apiCall}/api/producto/${this.$route.params.producto.id}`)
    .then(response => {
      response.data
    })
    .catch(err => console.log(err));
    if(this.$route.params.producto.id != null){
      this.$toastr.success('Registro eliminado!');
    }
    }
  }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input {
  background: #85b5d2;
  outline: none;
  border-radius: 1rem;
  text-align: center;
  padding: .5rem;

}
.stock, .id {
  width: 70%;

}
.precio {
  width: 100%;
}

</style>
