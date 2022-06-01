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
                  @click.prevent="validarDatos"
                  >Login</button>
                </div>
                <div v-if="error">
                  <h3 class="text-danger">Usuario no registrado</h3>
                   <router-link to="/FormLogin" class="btn btn-success">Registrate</router-link>
                </div>
              </div>
            </form>
            <!-- <div v-if="usuario.admin" class="form-row">
              <router-link class="col-lg-7" to="/Admin">
              </router-link>
            </div>
            <div v-if="usuario.cliente" class="form-row">
              <router-link class="col-lg-7" to="/">
              <button type="button"
                class="btn1 mt-3 mb-5"
              >ir a Home</button></router-link>
            </div> -->
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
        corredor: [],
        error: false,
        userLogged: null
      }
    },
    mounted() {
      this.getCorredorData();
    },
    methods: {
      async getCorredorData(){
        await axios.get(`${process.env.VUE_APP_API_URL}/api/corredor`)
        .then (response => {
          return response.data;
        })
        .then(data => {
          this.corredor = data;
        })
        .catch(err => (console.log(`${err}`)));
      },
      // validarEmail(){
      //   if(this.corredor.find(user => user.email === this.form.email)) {
      //     this.emailOk = true;
      //   }else {
      //     this.emailOk = false;
      //   }
      // },
      // validarPass(){
      //   if(this.corredor.find(user => user.pass === this.form.pass) && this.emailOk) {
      //     this.passOk = true;
      //   }else {
      //     this.passOk = false;
      //   }
      // },
      validarDatos(){
        let datosValidos = false;
        this.corredor.find( element => {
          if(element.email == this.form.email && element.pass == this.form.pass){
            datosValidos = true;
            this.userLogged = element;
            this.SaveUserLoggedInStorage(element);
            this.$emit('logged-in', element);
          }else {
            this.datosValidos = false;
          }
        });
        if (this.userLogged != null){
          if (this.userLogged?.isAdmin == false) {
              this.$router.push({name: 'UsuarioView'});
            }else {
              this.$router.push({name: 'Admin'});
            }
        }else {
          this.error = true;
        }
      },
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
