<template>
  <b-form @submit="onSubmit" @reset="onReset">
    <b-form-group
      id="input-group-1"
      label="Email address:"
      label-for="input-1"
      description="We'll never share your email with anyone else."
    >
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        required
        placeholder="Enter email"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Password:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="form.password"
        type="password"
        required
        placeholder="Enter your secret password"
      ></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="primary" >Sign-In</b-button>
  </b-form>
</template>

<script>

import Dashboard from '@/views/Dashboard.vue'

export default {
  name: "SignInForm",
  components: {
    Dashboard
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
           this.axios
        .post("http://localhost:8000/sign-in", this.form)
        .then((response) => {
        this.$store.dispatch('token', response.data.token),
          // console.log(response),
         // alert(JSON.stringify(this.form));
           this.$router.push('/dashboard')
          })
        .catch(function(error) {
            alert('This user do not exist')
          console.log(error);
        });
    }
    ,
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
  }
  }
}
</script>
