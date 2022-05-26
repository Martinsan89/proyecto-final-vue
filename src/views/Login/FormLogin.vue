<template>
 <div class="UserLogin">
      <section class="Form my-4 mx-5">
          <div class="container">
              <div class="row no-gutters">
                  <div class="col-lg-5">
                      <img src="@/assets/logoRun.jpeg" class="img-fluid" alt="Logo login">
                  </div>
                  <div class="col-lg-7 px-5 pt-5">
                      <h1 class="font-weight-bold py-3">Lo Run</h1>
                      <h4>Inicia tu cuenta LoRun</h4>
                       <form
        @submit.prevent="nuevoUsuario">
          <div class="from-row">
                <div class="col-lg-7 mt-3">
                    <h4 class="text-center">Nombre y Apellido</h4>
                    <div class="form-group text-center">
                        <input type="text"
                        class="form-control text-center"
                        placeholder="Ingrese su nombre"
                        name="Nombre"
                        v-model="form.nombre"
                        @keyup="validarNombre">
                        <span v-if="error.nombre" class="alert-danger">{{error.nombre}}</span>
                    </div>
                </div>
          </div>
          <div class="from-row">
                <div class="col-lg-7">
                    <div class="form-group">
                    <h4 class="text-center mt-3">Email</h4>
                    <input type="email"
                    class="form-control text-center"
                    id="inputEmail4"
                    placeholder="Email"
                    name="Email"
                    v-model="form.email"
                    @keyup="validarEmail">
                    <span v-if="error.email" class="alert-danger">{{error.email}}</span>
                    </div>
                    <div class="form-group ">
                    <h4 class="text-center mt-3">Contrasenia LoRun</h4>
                    <input type="password"
                    class="form-control text-center"
                    id="Pass"
                    placeholder="Crea tu contrasenia LoRun"
                    name="inputPass"
                    v-model="form.pass"
                    @keyup="validarPass">
                    <span v-if="error.pass" class="alert-danger">{{error.pass}}</span>
                    </div>
                    <br>
                </div>
          </div>
          <div class="from-row">
                <div class="col-lg-7">
                  <h4 class="text-center mt-3">Seleccione su edad</h4>
                  <div class="row checkbox-row" @mouseover="validarEdad">
                      <div class="col-xl ">
                          <div class="checkbox-inline">
                          <label class="checkbox-inline">
                          <input type="checkbox"
                          id="adulto"
                          value="adulto"
                          v-model="form.edad"
                          @mouseout="validarEdad"> +35</label>
                          </div>
                      </div>
                      <div class="row checkbox-row">
                          <div class="col-xl">
                          <div class="checkbox-inline">
                              <label class="checkbox-inline">
                              <input type="checkbox"
                              id="joven"
                              value="joven"
                              v-model="form.edad"
                              @mouseout="validarEdad"> -35</label>
                          </div>
                            <span v-if="error.edad" class="alert-danger">{{error.edad}}</span>
                          </div>
                      </div>
                  </div>
                </div>
          </div>
          <div class="from-row">
            <div class="col-lg-7">
                <button type="submit" class="btn btn-primary mt-3" @click="validarForm">INGRESAR</button>
            </div>
          </div>
        </form>
                  </div>
              </div>
          </div>
      </section>
  </div>
</template>

<script>
const axios = require('axios');

export default {
    name: "FormLogin",
    data(){
        return {
            form:{
                nombre:'',
                email:'',
                pass:'',
                genero:[],
                edad:[],
                pisada:'',
                peso:'',
                altura:''
            },
            error: {
                nombre:'',
                email:'',
                pass:'',
                edad:'',
                validacion:''
            }

        }
    },
    methods:{
        validarForm () {
            if(!this.form.nombre || !this.form.email || !this.form.pass || !this.form.edad){
                this.error.validacion = 'Debe completar los campos obligatorios(Nombre, Email, Pass y Edad)';
            }
        },
         async nuevoUsuario(){
                const userData = {
                  nombre: this.form.nombre,
                  email: this.form.email,
                  pass: this.form.pass,
                  edad: this.form.edad
                }
                await axios.post(`${process.env.VUE_APP_API_URL}/api/corredor`, userData)
                .then(response => {
                  console.log('usuario agregado', response.data)
                })
                .catch(error => console.log(error));
                    // Reset
                Object.keys(this.form).forEach(key => this.form[key] = '');
                this.form.genero = [];
                this.form.edad = [];
                this.error.validacion = '';

        },
        validarNombre(){
            const fullNameRegExp = /[a-zA-Z]{2,}\s+[a-zA-Z]{2,12}/g;
            if(this.form.nombre && fullNameRegExp.test(this.form.nombre)){
                this.error.nombre = '';
            } else {
                this.error.nombre = 'Ingresa un nombre y un apellido ';
            }
        },
        validarEmail(){
            const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            if(this.form.email && emailRegExp.test(this.form.email)){
                this.error.email = '';
            } else {
                this.error.email = 'Ingresa un email valido (con "@" y ".")';
            }
        },
        validarPass(){
            if(this.form.pass.length > 4){
                  this.error.pass = '';
            } else {
                this.error.pass = 'Ingresa una contrasenia de 5 caracteres';
            }
        },
        validarEdad(){
            if(this.form.edad != ''){
                  this.error.edad = '';
            } else {
                this.error.edad = 'Ingresa su edad';
            }
        }
    }

}
</script>

<style scopred>
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


