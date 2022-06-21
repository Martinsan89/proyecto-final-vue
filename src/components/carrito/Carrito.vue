<template>
  <div>
      <button class="btn btn-danger" @click.prevent="VaciarCarrito">Vaciar Carrito</button>
      <p>Para eliminar el producto lleve el contador a 0</p>
    <table class="table table-striped table-bordered">
        <thead class="text-dark">
            <tr>
                <th scope="col" colspan="10">Productos</th>
                <th scope="col" colspan="1">Cantidad</th>
                <th scope="col">Stock disponible </th>
                <th scope="col">Precio x Unidad $</th>
                <th scope="col">Total $</th>
            </tr>
        </thead>
        <tbody>
            <tr class="producto" v-for="producto in getProductosEnCarrito" :key="producto.id">
               <th class="text-dark" scope="col" colspan="10">{{producto.marca}} {{producto.modelo}}</th>
                <th class="text-dark" scope="col" colspan="1">
                  <button @click="Restar(producto)">-</button>
                  {{producto.quantity}}
                  <button @click="Sumar(producto)">+</button>
                </th>
                <th class="text-dark" scope="col">{{producto.stock}}</th>
                <th class="text-dark" scope="col">{{producto.precio}}</th>
                <th class="text-dark" scope="col">{{producto.total}}</th>
            </tr>
        </tbody>

        <tfoot>
            <td scope="col" colspan="10"></td>
            <td class="text-dark" scope="col" ><h4>Cantidad total: {{totalQuantity}}</h4></td>
            <td scope="col" ></td>
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
    ...mapGetters('carrito',['getProductosEnCarrito', 'getProdContador']),
    ...mapGetters('users',['getUserLogged']),

    totalQuantity(){
      return this.getProductosEnCarrito.reduce((acc, item) => acc + item.quantity, 0)
    },
    totalFinal(){
      return this.getProductosEnCarrito.reduce((acc, item) => acc + parseInt(item.total), 0)
    },
    validarStock(){
       for (const value of Object.values(this.getProductosEnCarrito)) {
        return (value.stock - value.quantity);
      }
    },
    async stockUpdate(){
      for (const value of Object.values(this.getProductosEnCarrito)) {
        let  idStockUpdate = value.id;
        let  resultStockUpdate = {
          stock: (value.stock - value.quantity)
        };
        await this.$http.put(`${process.env.VUE_APP_API_URL}/api/producto/${idStockUpdate}`, resultStockUpdate)
        .then(response => {
          return response.data
        })
        .catch(err => console.log(err));
      }
    }
  },
  methods: {
    ...mapActions(['toSetStock']),
    ...mapActions('carrito',['toVaciarProductos', 'toSetCarrito', 'toSetSumar', 'toSetRestar']),
    ...mapActions('users',['toSetUserLogged']),
    VaciarCarrito(){
      this.toVaciarProductos(),
      localStorage.removeItem('carrito');
    },
    async Comprar(){
      this.validarStock;
      if(!this.getUserLogged){
        return this.$toastr.warning('Inicia sesion para finalizar la compra')
      }
      if(this.validarStock < 0){
        return this.$toastr.warning('Verifique que haya stock disponible');
      }
      if(this.getProductosEnCarrito != 0 ){
        let prodCompra = this.getProductosEnCarrito.map(item => {
          let { id, marca, modelo, precio, quantity, stock } = item;
          return { id, marca, modelo, precio, quantity, stock }
        })
        const compra = {
        productos: prodCompra,
        quantity: this.totalQuantity,
        total: this.totalFinal,
        fecha: new Date()
        }

        await this.$http.post(`${process.env.VUE_APP_API_URL}/api/corredor/${this.getUserLogged.id}/compras`, compra)
        .then(response => {
        response.data
        })
        .catch(err => console.log(err));

        this.$toastr.success('Compra realizada!');

        if(compra){
          let stock = this.validarStock;
          this.toSetStock({prodCompra, stock});
          this.stockUpdate;
          localStorage.removeItem('carrito');
          this.$router.push({name: 'UsuarioCompras'});
        }
      } else {
        return this.$toastr.warning('Agrega un producto al carrito')
      }
    },
    Sumar(producto) {
      this.toSetSumar(producto);
    },
    Restar(producto){
      this.toSetRestar(producto);
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
