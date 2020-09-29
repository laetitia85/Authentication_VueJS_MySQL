import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    tokenName: '',
    tokenId: '',
    contacts: [],

  },
  plugins: [createPersistedState()]                                                //sert à garder le token si il y a l'actualisation de la page
,

  mutations: {
    STORE_TOKEN(state, myToken) {
      state.token = myToken;
  },
    DELETETOKEN(state) {
      state.token = '';
      state.tokenName = '';
      state.tokenId = '';
      state.contacts = []; 

    },
    DECODETOKEN(state, myDecodeToken) {
      state.tokenName = myDecodeToken;
  },
    DECODETOKENID(state, myDecodeTokenId) {
      state.tokenId =  myDecodeTokenId;
  },
    ADDCONTACT(state, myAddContact) {
    state.contacts.push(myAddContact);
  },
  RECCONTACT(state, myRecContact) {
    state.contacts = myRecContact;
  }
  },
  actions: {
    token(context, myToken) {
      context.commit("STORE_TOKEN", myToken);
    },
    deleteToken(context) {
      context.commit("DELETETOKEN");
    },
    decodeToken(context, myDecodeToken) {
      context.commit("DECODETOKEN", myDecodeToken);
    },
    decodeTokenId(context, myDecodeTokenId) {
      context.commit("DECODETOKENID", myDecodeTokenId)
    },
    addContact(context, myAddContact) {
      context.commit("ADDCONTACT", myAddContact)
    },
    recContact(context, myRecContact) {
      context.commit("RECCONTACT", myRecContact)
    }
  }, 
  getters: {
   TokenName: state => {
      return state.tokenName 
    },
    // TokenId: state => {
    //   return state.tokenId
    // },
    AllContact: state => {
      return state.contacts
    }
  }
})
