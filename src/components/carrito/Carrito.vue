<template>
  <div>
    <table class="table table-striped table-bordered">
        <thead class="text-dark">
            <tr>
                <th scope="col" colspan="10">Productos</th>
                <th scope="col" colspan="1">Cantidad</th>
                <th scope="col">Precio x Unidad</th>
                <th scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            <tr class="producto" v-for="producto in productosAlCarrito" :key="producto.id">
               <th class="text-dark" scope="col" colspan="10">{{producto.marca}} {{producto.modelo}}</th>
                <th class="text-dark" scope="col" colspan="1">
                  {{producto.quantity}}
                </th>
                <th class="text-dark" scope="col">{{producto.precio}}</th>
                <th class="text-dark" scope="col">{{producto.total}}</th>
            </tr>
        </tbody>

        <tfoot>
            <td scope="col" colspan="10"></td>
            <td class="text-dark" scope="col" ><h4>Cantidad total: {{totalQuantity}}</h4></td>
            <td scope="col" ></td>
            <td class="text-dark" scope="col"><h5>Precio Total: ${{totalFinal}}</h5></td>
        </tfoot>
    </table>
    <div class="btnCompra text-center">
        <button
        class="btn btn-dark"
        @click.prevent="Comprar"
        >Finalizar compra</button>
        <div v-if="ventana" class="mt-3">
          <h3 class="text-success text-center">Compra realizada!</h3>
        </div>
    </div>
  </div>
</template>


<script>

const axios = require('axios');

export default {
  name: "Carrito",
  props: {
    productosAlCarrito: {
      type: Array
    }
  },
  data(){
    return{
      user: [],
      ventana: false
    }
  },
  mounted(){
    this.getUser();
  },
  methods: {
    async Comprar(){
      const compra = {
        marca: this.productosAlCarrito.marca,
        modelo:this.productosAlCarrito.modelo,
        precio: this.productosAlCarrito.precio,
        quantity: this.totalQuantity,
        total: this.totalFinal
      }
      await axios.post(`${process.env.VUE_APP_API_URL}/api/corredor/${this.user.id}/compras`, compra)
      .then(response => {
        console.log('usuario agregado', response.data)
      })
      .catch(error => console.log(error));

      this.ventana = true;
      this.productosAlCarrito = [];

    },
    getUser(){
      this.user = JSON.parse(localStorage.getItem('UsuarioGuardado')) || [];
    }
  },
  computed: {
    totalQuantity(){
      return this.productosAlCarrito.reduce((acc, item) => acc + item.quantity, 0)
    },
    totalFinal(){
      return this.productosAlCarrito.reduce((acc, item) => acc + item.total, 0)
    },
  },
}
</script>


<style scoped>
::v-deep .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 600px;
}
::v-deep .modal-content{
    position: relative;
    display: flex;
    flex-direction: column;
    max-height: 90%;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid white;
    border-radius: 0.25rem;
    background: #fff;
}
.modal_title {
    text-align: center;
    margin: 0 2rem 0 0;
    font-size: 1.5rem;
    font-weight: 700;
}
.modal_content {
    margin-top: 4rem;
    flex-grow: 1;
    overflow-y: auto;
    text-align: center;
}
table {
  color: beige;
}
.producto {
  color: beige;
}
</style>
