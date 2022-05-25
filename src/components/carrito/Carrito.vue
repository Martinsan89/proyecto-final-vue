<template>
  <div>
    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th scope="col" colspan="10">Productos</th>
                <th scope="col" colspan="1">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="producto in productosAlCarrito" :key="producto.id">
               <th scope="col" colspan="10">{{producto.marca}} {{producto.modelo}}</th>
                <th scope="col" colspan="1">{{producto.quantity}}</th>
                <th scope="col">{{producto.precio}}</th>
                <th scope="col">{{producto.total}}</th>
            </tr>
        </tbody>

        <tfoot>
            <td scope="col" colspan="10"></td>
            <td scope="col" ><h4>Cantidad total: {{totalQuantity}}</h4></td>
            <td scope="col" ></td>
            <td scope="col"><h5>Precio Total: ${{totalFinal}}</h5></td>
        </tfoot>
    </table>
  </div>
</template>

<script>


export default {
    name: "Carrito",
    props: {
        productosAlCarrito: {
          type: Array
        }
    },
    computed: {
      totalQuantity(){
        return this.productosAlCarrito.reduce((acc, item) => acc + item.quantity, 0)
      },
      totalFinal(){
        return this.productosAlCarrito.reduce((acc, item) => acc + item.total, 0)
      },
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
</style>
