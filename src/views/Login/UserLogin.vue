<template>
  <div class="UserLogin">
    <section class="Form my-4 mx-5">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-lg-5">
            <img src="@/assets/logoRun.jpeg" class="img-fluid" alt="Logo login">
          </div>
          <div class="col-lg-7 px-5 pt-5 text-dark">
            <h1 class="font-weight-bold py-3">Lo Run</h1>
            <h4>Inicia Sesion con tu cuenta Lo Run</h4>
            <form>
              <div class="form-row">
                <div class="col-lg-7">
                  <input type="email" placeholder="Email-Adress" class="form-control my-3 p-4"
                  v-model="form.email">
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-7">
                    <input type="password" placeholder="*******" class="form-control my-3 p-4"
                    v-model="form.pass">
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-7">
                  <button type="button"
                  class="btn1 mt-3 mb-5"
                  @click.prevent="getUserData"
                  >Login</button>
                </div>
              </div>
            </form>
            <div v-if="usuario.admin" class="form-row">
              <router-link class="col-lg-7" to="/Admin">
              <button type="button"
                class="btn1 mt-3 mb-5"
              >ir a Admin</button></router-link>
            </div>
            <div v-if="usuario.cliente" class="form-row">
              <router-link class="col-lg-7" to="/">
              <button type="button"
                class="btn1 mt-3 mb-5"
              >ir a Home</button></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const axios = require('axios');

export default {
    name: 'UserLogin',
    data(){
      return{
        form: {
          email:'',
          pass: ''
        },
        usuario: {
          cliente: false,
          admin: false,
        },
        error: ''
      }
    },
    methods: {
      async getUserData(){
        await axios.get(`${process.env.VUE_APP_API_URL}/api/corredor`)
        .then (response => {
          return response.data;
        })
        .then(data => {
          const userCliente = data.filter(i => i.email == this.form.email && i.pass == this.form.pass);
          const userAdmin = this.form.email === "admin@admin.com" && this.form.pass === "admin";
          console.log(userCliente);
          console.log(userAdmin);
          if(userCliente){
            this.usuario.cliente = userCliente;
          } else {
            this.error = "usuario no encontrado";
          }
          if(userAdmin){
            this.usuario.admin = userAdmin;
          }

        })
        .catch(err => (console.log(`${err}`)));

        console.log(this.usuario.admin);
        console.log(this.usuario.cliente);
        console.log(this.error);
      }
    }

}
</script>

<style scoped>
body {
    background-color: grey;
}
.row {
    background: white;
    border-radius: 30px;
    box-shadow: 12px 12px 22px grey;
}
img {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
}
.btn1 {
    border: none;
    outline: none;
    height: 50px;
    width: 100%;
    background-color: black;
    color: white;
    border-radius: 4px;
    font-weight: bold;
}
.btn1:hover {
    background-color: white;
    border: 1px solid;
    color: black;
}
</style>
