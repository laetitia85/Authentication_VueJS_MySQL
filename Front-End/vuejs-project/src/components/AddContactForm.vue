<template>

 <b-form  @reset="onReset" >
  <b-form-group
    id="input-group-1"
    label="Your Name:"
    label-for="input-1"
  >
    <b-form-input
      id="input-1"
      v-model="contact.name"
      required
      placeholder="Enter name"
    ></b-form-input>

    <b-form-group
      id="input-group-2"
      label="Email address:"
      label-for="input-1"
      description="We'll never share your email with anyone else."
    >
      <b-form-input
        id="input-2"
        v-model="contact.email"
        type="email"
        required
        placeholder="Enter email"
      ></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary" @click="AddContact">Add</b-button>
  </b-form-group>
   </b-form>
</template>

<script>
export default {
  name: "AddContactForm",

  data() {
    return {
      contact: {
        name: "",
        email: "",
        user_affiliate: this.$store.state.tokenId,
      },
    };
  },
  methods: {
    AddContact(evt) {
      evt.preventDefault();
      this.axios
        .post("http://localhost:8000/add-new-contact", this.contact)
        .then(this.$store.dispatch('addContact', {name: this.contact.name , 
        email: this.contact.email , user_affiliate: this.contact.user_affiliate }));
    },

    onReset(evt) {
      evt.preventDefault();
      this.contact.name = "";
      this.contact.email = "";
      this.contact.user_affiliate = "";
    },
  },
};
</script>
