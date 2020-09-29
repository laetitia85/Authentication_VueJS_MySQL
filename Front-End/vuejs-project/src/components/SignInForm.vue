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
// import { mapGetters } from 'vuex';


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

  // computed: {
  //   ...mapGetters(['TokenId'])
  // },
 
  methods: {
      parseJwt (token)  {
      console.log(token)
   
    let f =  JSON.parse(atob(token.split('.')[1]));
    console.log(f)
      return f;
},
    onSubmit(evt) {
      evt.preventDefault();
           this.axios
        .post("http://localhost:8000/sign-in", this.form)
        .then((response) => {
        this.$store.dispatch('token', response.data.token);
        let jwt = this.parseJwt(response.data.token);
        // console.log(response.data.token)
        
        this.$store.dispatch('decodeToken', jwt.name)
        this.$store.dispatch('decodeTokenId', jwt.id);
        this.axios.get(`http://localhost:8000/get-contacts/${this.$store.state.tokenId}`)
        .then((response) => {this.$store.dispatch('recContact', response.data)})
          // console.log(jwt.name);
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
