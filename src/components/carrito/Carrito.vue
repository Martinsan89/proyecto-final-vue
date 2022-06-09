<template>
  <div>
      <button class="btn btn-danger" @click.prevent="VaciarCarrito">Vaciar Carrito</button>
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
            <tr class="producto" v-for="producto in getProductosEnCarrito" :key="producto.id">
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
    <div v-if="getProductosEnCarrito" class="btnCompra text-center">
        <button
        class="btn btn-dark"
        @click.prevent="Comprar"
        >Finalizar compra</button>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';
const axios = require('axios');
const apiCall = 'https://628e2cc9a339dfef87a8fd8c.mockapi.io';

export default {
  name: "Carrito",
  created(){
    this.toSetUserLogged();
    this.toSetCarrito();
  },
  mounted(){
    this.getUserLogged;
    this.getProductosEnCarrito;
  },
  computed: {
    ...mapGetters('carrito',['getProductosEnCarrito']),
    ...mapGetters('users',['getUserLogged']),

    totalQuantity(){
      return this.getProductosEnCarrito.reduce((acc, item) => acc + item.quantity, 0)
    },
    totalFinal(){
      return this.getProductosEnCarrito.reduce((acc, item) => acc + parseInt(item.total), 0)
    }
  },
  methods: {
    ...mapActions('carrito',['toVaciarProductos', 'toSetCarrito']),
    ...mapActions('users',['toSetUserLogged']),

    VaciarCarrito(){
      this.toVaciarProductos(),
      localStorage.removeItem('carrito');
    },
    async Comprar(){
      if(!this.getUserLogged){
        return this.$toastr.warning('Inicia sesion para finalizar la compra')
      }
      if(this.getProductosEnCarrito != 0 ){
        const compra = {
        marca: this.getProductosEnCarrito.marca,
        modelo:this.getProductosEnCarrito.modelo,
        precio: this.getProductosEnCarrito.precio,
        quantity: this.totalQuantity,
        total: this.totalFinal
        }

        await axios.post(`${apiCall}/api/corredor/${this.getUserLogged.id}/compras`, compra)
        .then(response => {
        response.data,
        this.$toastr.success('Compra realizada!');
        })
        .catch(err => console.log(err));

        if(compra){
        localStorage.removeItem('carrito');
        this.toSetCarrito();
        this.getProductosEnCarrito;
        }
      } else {
        return this.$toastr.warning('Agrega un producto al carrito')
      }
    }
  }
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
