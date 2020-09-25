<template >
  <b-form @submit="onSubmit" @reset="onReset">
     
       <p v-if="lol == true">You have been registred go Sign-in now</p>
    <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
      <b-form-input
        id="input-1"
        v-model="form.name"
        required
        placeholder="Enter your name"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Email address:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="form.email"
        type="email"
        required
        placeholder="Enter email"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-3" label="password:" label-for="input-3">
      <b-form-input
        id="input-3"
        v-model="form.password"
        type="password"
        required
        placeholder="Enter your secret password"
      ></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary"
      >Sign-Up</b-button>
  </b-form>

</template>

<script>

export default {
  name: "SignUpForm",
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
      },
      lol: false,
    };
  },
  methods: {

    onSubmit(evt) {
      console.log('lol')
      evt.preventDefault();
            this.axios
        .post("http://localhost:8000/sign-up", this.form)
        .then((response) => { 
            this.lol = true
            
            console.log('You have been registred go Sign-in now')
        })
          .catch(function(error) {
          console.log(error);
        });
      
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.password = "";
    },
  },

};
</script>
