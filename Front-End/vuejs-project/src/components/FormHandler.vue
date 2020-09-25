<template>
    <div>
  <b-tabs content-class="mt-3">
    <b-tab title="SignUp" active><SignUpForm/></b-tab>
    <b-tab title="SignIn"><SignInForm/></b-tab>
  </b-tabs>
    </div>
</template>

<script>

import SignUpForm from './SignUpForm.vue'
import SignInForm from './SignInForm.vue'

export default {
    name: 'FormHandler',
    components: {
        SignUpForm,
        SignInForm
}
}
</script>

<style>

</style>
