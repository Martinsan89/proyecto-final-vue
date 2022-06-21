<template>
 <div class="UserLogin">
    <section class="Form">
      <div class="container">
        <div class="column no-gutters text-dark">
          <div class="col-12 text-center">
            <img src="@/assets/logoRun.jpeg" class="img-fluid " alt="Logo login">
          </div>
          <div class="col-12 text-center">
            <h4>Inicia tu cuenta LoRun</h4>
            <form>
            <div class="from-column">
              <div class="col-12">
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
            <div class="from-column">
              <div class="col-12">
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
            <div class="from-column">
              <div class="col-12">
                <h4 class="text-center mt-3">Seleccione su pisada</h4>
                <div class="row checkbox-row" @mouseover="validarPisada">
                  <div class="col-xl text-center">
                    <div class="checkbox-inline">
                      <label class="checkbox-inline">
                      <input type="checkbox"
                      id="pronador"
                      value="pronador"
                      v-model="form.pisada"
                      @mouseout="validarPisada"> Pronador - poco arco</label>
                    </div>
                      <div class="checkbox-inline">
                        <label class="checkbox-inline">
                        <input type="checkbox"
                        id="neutro"
                        value="neutro"
                        v-model="form.pisada"
                        @mouseout="validarPisada"> Neutro - arco normal</label>
                      </div>
                      <div class="checkbox-inline">
                        <label class="checkbox-inline">
                        <input type="checkbox"
                        id="supinador"
                        value="supinador"
                        v-model="form.pisada"
                        @mouseout="validarPisada"> Supinador - mucho arco</label>
                      </div>
                      <span v-if="error.pisada" class="alert-danger">{{error.pisada}}</span>
                  </div>
                </div>
              </div>
            </div>
            <br>
            <div class="from-row">
              <div class="col-12">
                <span v-if="error.validacion" class="alert-danger p-1 mt-3">{{error.validacion}}</span>
                <br>
                <button type="submit" class="btn btn-primary mt-3" @click.prevent="nuevoUsuario">INGRESAR</button>
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
import { mapActions } from 'vuex';

export default {
    name: "FormLogin",
    data(){
        return {
            form:{
                nombre:'',
                email:'',
                pass:'',
                pisada:[],
            },
            error: {
                nombre:'',
                email:'',
                pass:'',
                pisada:'',
                validacion:''
            }

        }
    },
    methods:{
      ...mapActions('users',['toSaveUserLoggedInStorage']),
      async nuevoUsuario(){
        if(!this.form.nombre || !this.form.email || !this.form.pass || !this.form.pisada){
                return this.error.validacion = 'Debe completar el formulario';
          };
        const userData = {
          nombre: this.form.nombre,
          email: this.form.email,
          pass: this.form.pass,
          pisada: this.form.pisada
        }
        await this.$http.post(`${process.env.VUE_APP_API_URL}/api/corredor`, userData)
        .then(response => {
          let user = response.data;
          this.toSaveUserLoggedInStorage(user);
        })
        .catch(error => console.log(error));
            // Reset
        Object.keys(this.form).forEach(key => this.form[key] = '');
        this.form.pisada = [];
        this.error.validacion = '';
        // Router
        this.$router.push({name:"UsuarioView"});

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
      validarPisada(){
          if(this.form.pisada != ''){
                this.error.pisada = '';
          } else {
              this.error.pisada = 'Ingresa su pisada';
          }
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
    height: 12rem;
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


