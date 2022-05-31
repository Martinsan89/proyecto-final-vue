<template>
  <div>
    <form class="text-center">
      <div class="form-group row text-center">
        <label  class="col-sm-2 col-form-label">Marca</label>
        <div class="col-sm-10">
          <input type="text"
          class="form-control"
          v-model="marca">
        </div>
      </div>
      <div class="form-group row">
        <label  class="col-sm-2 col-form-label">Modelo</label>
        <div class="col-sm-10">
          <input type="text"
          class="form-control"
          v-model="modelo">
        </div>
      </div>
      <div class="form-group row">
        <label  class="col-sm-2 col-form-label">Peso</label>
        <div class="col-sm-10">
          <input type="text"
          class="form-control"
          v-model="peso">
        </div>
      </div>
      <div class="form-group row">
        <label  class="col-sm-2 col-form-label">Precio</label>
        <div class="col-sm-10">
          <input type="number"
          class="form-control"
          v-model="precio">
        </div>
      </div>
      <div class="form-group row">
        <label  class="col-sm-2 col-form-label">Drop</label>
        <div class="col-sm-10">
          <input type="text"
          class="form-control"
          v-model="drop">
        </div>
      </div>
      <div class="form-group row">
        <label  class="col-sm-2 col-form-label">Img</label>
        <div class="col-sm-10">
          <input type="text"
          class="form-control"
          v-model="img">
        </div>
      </div>
      <div class="form-group row">
        <label  class="col-sm-2 col-form-label">Stock</label>
        <div class="col-sm-10">
          <input type="number"
          class="form-control"
          v-model="stock">
        </div>
      </div>
      <div class="form-group row">
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
const axios = require('axios');

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
      await axios.post(`${process.env.VUE_APP_API_URL}/api/producto`, newZapa)
      .then(response => {
          this.marca = '',
          this.modelo = '',
          this.peso = '',
          this.precio = '',
          this.drop = '',
          this.img = '',
          this.stock = ''
      })
      .catch(err => console.log(err));
    }
  }

}
</script>

<style scoped>
input {
  width: 30%;
}

</style>
