<template>
  <div class="dashboard">
    <h1>This is a Dashboard page</h1>
    <h3>Welcome to you connected user !</h3>
    <br>
     <br>
      <br>
       <br>
      <b-button variant="outline-primary" @click="DeleteToken()">Sign-Out</b-button>
  </div>
</template>

<script>
export default {
    name: 'Dashboard',

methods : {
  DeleteToken() {
      this.$store.dispatch('deleteToken').then(() => {
      this.$router.push('/')
    })
  }
}
}
</script>