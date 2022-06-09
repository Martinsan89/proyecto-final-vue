import Vue from "vue";
import Vuex from "vuex";
import apiServices from "@/services/apiServices";
import users from "./modules/users";
import carrito from "./modules/carrito";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    productosLista: [],
  },
  getters: {
    getProductosLista: (state) => {
      return state.productosLista;
    },
  },
  mutations: {
    SET_PRODUCTOS(state, payload) {
      state.productosLista = payload;
    },
  },
  actions: {
    toProductosLista: ({ commit }) => {
      apiServices
        .getProductos()
        .then((result) => commit("SET_PRODUCTOS", result))
        .catch((err) => console.log(err));
    },
  },
  modules: {
    users,
    carrito,
  },
});
