<template>
  <div class="UserLogin">
    <section class="Form my-4 mx-5">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-lg-5">
            <img src="@/assets/logoRun.jpeg" class="img-fluid" alt="Logo login">
          </div>
          <div class="col-lg-7 text-dark loginForm">
            <h1 class="font-weight-bold ">Lo Run</h1>
            <h4>Inicia Sesion</h4>
            <form>
              <div class="form-row">
                <div class="col-lg-7">
                  <input type="email" placeholder="Email-Adress" class="form-control"
                  v-model="form.email">
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-7">
                    <input type="password" placeholder="*******" class="form-control mt-2"
                    v-model="form.pass">
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-7">
                  <button type="button"
                  class="btn1 mt-2"
                  @click.prevent="validarDatos"
                  >Login</button>
                </div>
                <div>
                  <h5 class="text-success mt-2">No tienes cuenta?</h5>
                  <!-- Button trigger modal -->
                  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#formModal">
                    Registrate
                  </button>
                  <!-- Modal -->
                  <div class="modal" id="formModal" tabindex="-1" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="formModalLabel">Form Registro</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"></span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <FormRegistro />
                        </div>
                      </div>
                    </div>
                  </div>
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
import { mapActions, mapGetters} from 'vuex';
import FormRegistro from '../components/Login/FormRegistro.vue';

export default {
    name: 'UserLogin',
    components: { FormRegistro },
    data(){
      return{
        form: {
          email:'',
          pass: ''
        },
        error: false,
      }
    },
    mounted(){
      //console.log(this.getUserLogged);
    },
    computed: {
      ...mapGetters('users',['getUsers', 'getUserLogged'])
    },
    methods: {
      ...mapActions('users',['SaveUserLogged']),

      validarDatos(){
      console.log(this.getUsers);
        const userEncontrado = this.getUsers.find(item => (item.email == this.form.email && item.pass == this.form.pass));
        if (userEncontrado == null){
          alert("Datos inválidos!");
          return;
        }

        this.SaveUserLogged(userEncontrado);
        if (this.getUserLogged != null){
          if (this.getUserLogged?.isAdmin == false) {
              this.$router.push({name: 'Home'});
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
    height: 20rem;
}
img {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    height: 20rem;
}
h1 {
  font-size: 1.5rem;
}
h4 {
  font-size: 1.2rem;
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
