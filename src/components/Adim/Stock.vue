<template>
  <div>
    <table class="table">
      <thead>
        <tr>
        <th class="col-3">Productos</th>
        <th class="col-2"></th>
        <th class="col-1">ID</th>
        <th class="col-1">Stock</th>
        <th class="col-1">Precio $</th>
        <th class="col-2"></th>
        <th class="col-2"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto in productoLista" :key="producto.id">
        <td class="col-3">
          {{producto.marca}}
          <br>
          {{producto.modelo}}</td>
        <td class="col-2">
          <img :src="producto.img" :alt="producto.modelo">
        </td>
        <td class="col-1">{{producto.id}}</td>
        <td class="col-1">{{producto.stock}}</td>
        <td class="col-1">{{producto.precio}}</td>
        <td class="col-2">
          <router-link
          :to="{
            name: 'Update',
            params: {
              id: producto.id,
              producto
            }
          }"
          class="btn btn-primary">Actualizar</router-link>
        </td>
        <td class="col-2">
          <button
          @click.prevent="Delete"
          class="btn btn-danger">Eliminar</button>
        </td>
         </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: "Stock",

  // data(){
  //   return {
  //     actualizar: false
  //   }
  // },
  props: {
    productoLista: [],
  },
  methods: {
    async Delete(id = this.producto.id){
      await axios.delete(`${process.env.VUE_APP_API_URL}/api/producto/${id}`)
      .then(response => {
        console.log('registro eliminado', response.data);
      })
      .catch(err => console.log(err));
    }
  }
}
</script>

<style scoped>


</style>
