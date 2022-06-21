<template>
  <div>
    <router-link class="btn btn-dark mx-3"
    to="/Admin"
    >Volver al Admin</router-link>
    <h1 class="text-center text-dark mb-5">Ingrese una nueva Zapatilla</h1>
    <form class="text-center text-dark">
      <div class="form-group row col-12">
        <label class="col-4">Marca</label>
          <input type="text"
          class="form-control col-6"
          v-model="marca">
      </div>
      <div class="form-group row col-12">
        <label class="col-4">Modelo</label>
          <input type="text"
          class="form-control col-6"
          v-model="modelo">
      </div>
      <div class="form-group row col-12">
        <label class="col-4 ">Peso</label>
          <input type="text"
          class="form-control col-6"
          v-model="peso">
      </div>
      <div class="form-group row col-12">
        <label class="col-4">Precio</label>
          <input type="number"
          class="form-control col-6"
          v-model="precio">
      </div>
      <div class="form-group row col-12">
        <label class="col-4">Drop</label>
          <input type="text"
          class="form-control col-6"
          v-model="drop">
      </div>
      <div class="form-group row col-12">
        <label class="col-4">Img</label>
          <input type="text"
          class="form-control col-6"
          v-model="img">
      </div>
      <div class="form-group row col-12">
        <label class="col-4">Stock</label>
          <input type="number"
          class="form-control col-6"
          v-model="stock">
      </div>
      <div class="form-group row mt-4">
        <div class="col-sm-10">
          <button  type="submit"
          @click.prevent="CrearZapatilla"
          class="btn btn-primary">Crear</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Zapatilla',
  data: () => ({
    marca: '',
    modelo: '',
    peso: '',
    precio: '',
    drop: '',
    img: '',
    stock: '',
  }),
  methods: {
    async CrearZapatilla() {
      const newZapa = {
        marca: this.marca,
        modelo: this.modelo,
        peso: this.peso,
        precio: this.precio,
        drop: this.drop,
        img: this.img,
        stock: this.stock,
      }
      await this.$http.post(`${process.env.VUE_APP_API_URL}/api/producto`, newZapa)
      .then(response => {
        return response.data
      })
      .catch(err => console.log(err));

      if(newZapa !=null){
          this.marca = '',
          this.modelo = '',
          this.peso = '',
          this.precio = '',
          this.drop = '',
          this.img = '',
          this.stock = '',
          this.$toastr.success('Producto Ingresado!');
      }
    }
  }

}
</script>

<style scoped>
input {
  width: 30%;
}

</style>
