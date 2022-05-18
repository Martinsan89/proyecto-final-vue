<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col" colspan="10">Productos</th>
                <th scope="col" colspan="1">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="producto in carrito" :key="producto.id"></tr>
        </tbody>

        <tfoot>
            <td scope="col" colspan="10"></td>
            <td scope="col" colspan="1"></td>
            <td><h4>Total:</h4></td>
            <td><h5>Total:</h5>$ {{total}}</td>
        </tfoot>
    </table>
</template>

<script>
export default {
    name: "ListaCarrito",
    props: {
        carrito: {
            type: Array
        }
    }
}
</script>

<style>

</style>
