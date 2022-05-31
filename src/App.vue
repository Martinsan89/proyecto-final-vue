<template>
<div>
  <router-link to="/"
  class="btn btn-primary"
  >Home</router-link>
  <router-view />

</div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>



