<template>
    <div class="card row col-6 text-center py-4" style="width: 18rem;">
        <div class="card-body">
            <img class="card-img-top" :src="getImgUrl()" :alt="producto.modelo">
            <h5 class="card-title">{{producto.marca}}</h5>
            <p class="card-text">{{producto.modelo}}</p>
            <p class="card-text">Weight: {{producto.peso}}</p>
            <p class="card-text">${{producto.precio}}</p>
            <button class="btn btn-dark" @submit.prevent @click="AgregarAlCarrito()" >Comprar</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"Productos",
    props: {
        producto: {
            type: Object,
            required: true
        }
    },
    methods: {
       AgregarAlCarrito() {
            this.$emit("agregar-al-carrito", this.producto);
        },
        getImgUrl() {
            return require(`@/assets/ImgZapas/${this.producto.img}`);
        }
    }

}
</script>

<style scoped>
.card {
    border-radius: 3rem;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.btn:hover {
    background-color: white;
    color: black;

}

</style>
