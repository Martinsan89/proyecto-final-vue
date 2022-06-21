<template>
  <div class="listaCompras">
    <router-link class="btn btn-dark mx-3"
    to="/UsuarioView"
    >Volver</router-link>
    <div class="text-center">
      <h1>Compras realizadas</h1>
    </div>
    <div v-for="(producto, index) in productosLista" :key="index" >
      <h3 class="text-center text-primary">Número de orden: {{producto.id}}</h3>
      <table class="table table-striped table-bordered">
        <thead class="text-dark">
          <tr>
            <th scope="col" colspan="10">Productos</th>
                  <th scope="col" colspan="1">Cantidad</th>
                  <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr class="producto" v-for="(item, index) in producto.productos" :key="index" >
            <th class="text-dark" scope="col" colspan="10" >{{item.marca}} {{item.modelo}}</th>
            <th class="text-dark" scope="col" colspan="1">
            {{item.quantity}}
            </th>
            <th class="text-dark" scope="col">{{item.precio}}</th>

          </tr>
        </tbody>
        <tfoot>
          <th colspan="10"></th>
          <th colspan="1">Total Productos: {{producto.quantity}}</th>
          <th class="text-dark" scope="col"> Total Final: ${{producto.total}}</th>
        </tfoot>
      </table>

    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: "UsuarioCompras",
  data(){
    return{
      productosLista: [],
      user: null
    }
  },
  created(){
    this.toSetUserLogged();
    this.getCompras();
  },
  computed: {
    ...mapGetters('users',['getUserLogged'])
  },
  methods: {
    ...mapActions('users',['toSetUserLogged']),
    async getCompras(){
      await this.$http.get(`${process.env.VUE_APP_API_URL}/api/corredor/${this.getUserLogged.id}/compras`)
      .then(response => {
        return this.productosLista = [...response.data].reverse();
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
