<template>
<div class="home">
  <router-view />

</div>
</template>

<script>
import { mapActions} from 'vuex';
export default {
  name: 'App',
  created(){
    this.SetUsers();
    this.TrySetUserLoggedFromLocalStorage();
  },
  methods:{
      ...mapActions('users',['SetUsers', "TrySetUserLoggedFromLocalStorage"]),
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>



