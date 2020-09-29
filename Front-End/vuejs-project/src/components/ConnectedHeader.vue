<template>
  <div>
      <p>Dashboard</p>
       <p>{{TokenName}}</p>
    <b-button variant="outline-primary" @click="DeleteToken()"
      >Sign-Out</b-button>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: "ConnectedHeader",


   computed: {
       ...mapGetters(['TokenName'])
    },
  methods: {
    DeleteToken() {
      this.$store.dispatch("deleteToken").then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style></style>
