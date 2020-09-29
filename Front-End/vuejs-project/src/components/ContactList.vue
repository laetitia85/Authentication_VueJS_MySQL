<template>
  <div>
      <div v-for= "contact in AllContact " :key="contact.name">
          <p>{{contact.name}}</p>
            <p>{{contact.email}}</p>
      </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'


export default {
    name: 'ContactList',

    computed: {
        ...mapGetters(['AllContact'])
    }

//  computed: {
//       Contacts: function() {return this.$store.state.contacts}
//     },
}
</script>