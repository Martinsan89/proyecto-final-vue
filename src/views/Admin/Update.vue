<template>
  <div>
    <div class="titulo">
      <h1 class="text-center">Actualizacion de stock y precio </h1>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio $</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{this.$route.params.producto.marca}} {{this.$route.params.producto.modelo}}</td>
          <td>
            <input type="number" class="stock" v-model="stock">
          </td>
          <td>
            <input type="number" class="precio"
            v-model="precio">
          </td>
          <td>
            <button @click.prevent="Confirmar" class="btn btn-warning">Confirmar</button>
          </td>
          <td>
            <router-link to="/Admin"
            class="btn btn-success">Stock
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="ventana">
      <h3 class="text-center">Registro actualizado!</h3>
    </div>

  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'Update',
  data: () => ({
    stock: 0,
    precio: 0,
    ventana: false
  }),
  methods: {
    async Confirmar(){
      const zapaUpdate = {
        stock: this.stock,
        precio: this.precio
      }
      await axios.put(`${process.env.VUE_APP_API_URL}/api/producto/${this.$route.params.producto.id}`, zapaUpdate)
      .then(response => {
        this.ventana = true;
      })
      .catch(err => console.log(err));
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
