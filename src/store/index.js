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
    setSumarQuantity(state, producto) {
      const prod = state.productosLista.find((item) => item.id == producto.id);
      prod.quantity++;
    },
    setRestarQuantity(state, producto) {
      const prod = state.productosLista.find((item) => item.id == producto.id);
      prod.quantity < 1 ? (prod.quantity = 0) : prod.quantity--;
    },
    setStock(state, { producto, stock }) {
      const prod = state.productosLista.find((item) => item.id == producto.id);
      if (prod) {
        prod.stock = stock;
      }
    },
  },
  actions: {
    toProductosLista: ({ commit }) => {
      apiServices
        .getProductos()
        .then((result) => commit("SET_PRODUCTOS", result))
        .catch((err) => console.log(err));
    },
    toSetSumarQuantity: ({ commit }, producto) => {
      commit("setSumarQuantity", producto);
    },
    toSetRestarQuantity: ({ commit }, producto) => {
      commit("setRestarQuantity", producto);
    },
    toSetStock: ({ commit }, producto, stock) => {
      commit("setStock", { producto, stock });
    },
  },
  modules: {
    users,
    carrito,
  },
});
