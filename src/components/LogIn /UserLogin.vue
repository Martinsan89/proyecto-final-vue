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
                      <h4>Inicia Sesion con tu cuenta Lo Run</h4>
                      <form>
                          <div class="form-row">
                              <div class="col-lg-7">
                                  <input type="email" placeholder="Email-Adress" class="form-control my-3 p-4">
                              </div>
                          </div>
                          <div class="form-row">
                              <div class="col-lg-7">
                                  <input type="password" placeholder="*******" class="form-control my-3 p-4">
                              </div>
                          </div>
                          <div class="form-row">
                              <div class="col-lg-7">
                                  <button type="button" class="btn1 mt-3 mb-5">Login</button>
                              </div>
                          </div>
                          <a href="#">Olvidste la contrasenia? </a>
                          <p>No tenes una cuenta? <a href="#">Registrate</a></p>
                      </form>
                  </div>
              </div>
          </div>
      </section>
  </div>
</template>

<script>
export default {
    name: 'UserLogin',

}
</script>

<style>
body {
    background-color: beige;
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
