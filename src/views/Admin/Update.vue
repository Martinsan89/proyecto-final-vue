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
            <input type="number" class="stock" v-model="stock" placeholder="nuevo stock">
          </td>
          <td>
            <input type="number" class="precio"
            v-model="precio" placeholder="nuevo precio">
          </td>
          <td>
            <button @click.prevent="Confirmar" class="btn btn-warning">Confirmar</button>
          </td>
          <td>
            <router-link to="/Admin"
            class="btn btn-success">Admin
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

export default {
  name: 'Update',
  data: () => ({
    stock: '',
    precio: '',
    ventana: false
  }),
  methods: {
    async Confirmar(){
      const zapaUpdate = {
        stock: this.stock,
        precio: this.precio
      }
      await this.$http.put(`${process.env.VUE_APP_API_URL}/api/producto/${this.$route.params.producto.id}`, zapaUpdate)
      .then(response => {
        response.data
      })
      .catch(err => console.log(err));
      this.ventana = true;
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
