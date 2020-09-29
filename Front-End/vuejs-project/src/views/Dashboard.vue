<template>
  <div class="dashboard">
       
       <header><ConnectedHeader/></header>
    <h1>This is a Dashboard page</h1>
    <h3>Welcome to you connected user !</h3>
    <br>
     <br>
      <br>
       <br>
         <b-tabs content-class="mt-3">
    <b-tab title="List-Contacts" active><ContactList/></b-tab>
    <b-tab title="Add-Contact"><AddContactForm/></b-tab>
  </b-tabs>
      <!-- <b-button variant="outline-primary" @click="DeleteToken()">Sign-Out</b-button> -->
   
  </div>
</template>

<script>

import ConnectedHeader from '../components/ConnectedHeader.vue'
import AddContactForm from'../components/AddContactForm.vue'
import ContactList from '../components/ContactList.vue'

export default {
    name: 'Dashboard',
    components:{
       ConnectedHeader,
       AddContactForm,
       ContactList,
    },


// methods : {
//   DeleteToken() {
//       this.$store.dispatch('deleteToken').then(() => {
//       this.$router.push('/')
//     })
//   }
// }
}
</script>