<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <!-- <b-form @submit="onSubmit" @reset="onReset"> -->
            <form
              @submit.prevent="handleSubmit"
              @submit="onSubmit"
              @reset="onReset"
            >
              <p v-if="lol == true">You have been registred go Sign-in now</p>

              <div class="form-group">
                <label for="Name">Name</label>
                <input
                  type="text"
                  v-model="user.name"
                  id="firstName"
                  name="Name"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && $v.user.name.$error }"
                />
                <div
                  v-if="submitted && !$v.user.name.required"
                  class="invalid-feedback"
                >
                  Name is required
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  v-model="user.email"
                  id="email"
                  name="email"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && $v.user.email.$error }"/>
                <div
                  v-if="submitted && $v.user.email.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.email.required">Email is required</span>
                  <span v-if="!$v.user.email.email">Email is invalid</span>
                </div>
              </div>

              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  v-model="user.password"
                  id="password"
                  name="password"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.user.password.$error,}"/>
                <div
                  v-if="submitted && $v.user.password.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.password.required"
                    >Password is required</span
                  >
                  <span v-if="!$v.user.password.minLength"
                    >Password must be at least 6 characters</span
                  >
                </div>
              </div>

                 <b-button type="submit" variant="primary"
                    >Sign-Up</b-button> 
 
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "SignUpForm",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
      submitted: false,
      lol: false,
    }
  },
  validations: {
    user: {
      name: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
    },
  },

  methods: {
    onSubmit(evt) {
      // console.log("lol");
      evt.preventDefault();
      this.axios
        .post("http://localhost:8000/sign-up", this.user)
        .then((response) => {
          this.lol = true;

          console.log("You have been registred go Sign-in now");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.user.email = "";
      this.user.name = "";
      this.user.password = "";
    },
    handleSubmit(e) {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return
        ;
      }

      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
    },
  },
};
</script>
