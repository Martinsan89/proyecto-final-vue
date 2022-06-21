<template>
  <div class="container">
  <div class="form">
    <router-link to="/Admin" class="link btn btn-dark">to Admin</router-link>
  </div>
  <h2 class="text-center mb-3">Lista de usuarios registrados</h2>
  <table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
      <th scope="col">Pass</th>
      <th scope="col">Pisada</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user, index) in getUsers" :key="index" class="text">
      <th>{{user.nombre}}</th>
      <th>{{user.email}}</th>
      <th>{{user.pass}}</th>
      <th>{{user.pisada}}</th>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';

export default {
  name: 'DataUsers',
  created(){
    this.toSetUsers();
  },
  computed: {
    ...mapGetters('users',['getUsers'])
  },
  methods: {
    ...mapActions('users',['toSetUsers'])
  }

}
</script>

<style scoped>
.form {
  margin: 2rem 3rem;
  border-radius: 2rem;
}
.link {
  background-color: white;
  color: black;
  padding: 1rem;
  border-radius: 2rem;
}
.text {
  color: black;
}
</style>
