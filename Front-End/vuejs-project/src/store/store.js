import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
  },
  plugins: [createPersistedState()]                                                //sert à garder le token si il y a l'actualisation de la page
,

  mutations: {
    STORE_TOKEN(state, myToken) {
      state.token = myToken;
    },
    DELETETOKEN(state) {
    state.token = '';
  }
  },
  actions: {
    token(context, myToken) {
      context.commit("STORE_TOKEN", myToken);
    },
    deleteToken(context) {
      context.commit("DELETETOKEN");
    }
  }
})
