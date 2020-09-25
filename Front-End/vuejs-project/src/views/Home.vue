<template>
  <div class="home">
   <div>
  <b-jumbotron>
    <template v-slot:header>Connexion Interface</template>

    <template v-slot:lead>
    Below the formulary for signUp or signIn in our magnificient application ! 
    </template>

    <hr class="my-4">
    <FormHandler/>
  </b-jumbotron>
</div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import FormHandler from '@/components/FormHandler.vue'

export default {
  name: 'Home',
  components: {
      FormHandler,
   
    
  }
}
</script>
