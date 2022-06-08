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
    productosAlCarrito: [],
  },
  getters: {
    getProductosLista: (state) => {
      return state.productosLista;
    },
    getProductosAlCarrito: (state) => {
      return state.productosAlCarrito;
    },
    getProductosAlCarritoLength: (state) => (length) => {
      return state.productosAlCarrito.slice(0, length);
    },
  },
  mutation: {
    SET_PRODUCTOS(state, payload) {
      state.productosLista = payload;
    },
    setProductosAlCarrito: (state, productoId) => {
      const prodEnCarrito = state.productosAlCarrito.find(
        (product) => product.id === productoId
      );
      if (prodEnCarrito) {
        prodEnCarrito.quantity++;
        prodEnCarrito.total = prodEnCarrito.quantity * prodEnCarrito.precio;
      } else {
        const findProduct = state.productosLista.find(
          (product) => product.id === productoId
        );
        const nuevoProd = { ...findProduct };

        state.productosAlCarrito.push({
          ...nuevoProd,
          quantity: 1,
          total: nuevoProd.precio,
        });
      }
      localStorage.setItem("carrito", JSON.stringify(state.productosAlCarrito));
    },
    setVaciarProductos: (state) => {
      state.productosAlCarrito = [];
    },
    setCarrito: (state) => {
      state.productosAlCarrito =
        JSON.parse(localStorage.getItem("carrito")) || [];
    },
  },
  actions: {
    toProductosLista: ({ commit }) => {
      apiServices
        .getProductos()
        .then((result) => commit("SET_PRODUCTOS", result))
        .catch((err) => console.log(err));
    },

    toProductosAlCarrito({ commit, productoId }) {
      commit("setProductosAlCarrito", productoId);
    },
    toSetCarrito: (context) => {
      context.commit("setCarrito");
    },
    toVaciarProductos: (context) => {
      context.commit("vaciarProductos");
    },
  },
  modules: {
    users,
    carrito,
  },
});
