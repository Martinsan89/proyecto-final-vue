import Vue from "vue";
import Vuex from "vuex";
// import productos from "./modules/producto"
const axios = require("axios");

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    productosLista: [],
    productosAlCarrito: [],
  },
  getters: {
    getProductosLista: (state) => state.productosLista,
  },
  mutation: {
    setProductosLista(state, payload) {
      state.productosLista = payload;
    },
    setProductosAlCarrito(state) {
      const prodEnCarrito = this.state.productosAlCarrito.find(
        (product) => product.id === state
      );
      if (prodEnCarrito) {
        prodEnCarrito.quantity++;
        prodEnCarrito.total = prodEnCarrito.quantity * prodEnCarrito.precio;
      } else {
        const findProduct = this.state.productosLista.find(
          (product) => product.id === state
        );
        const nuevoProd = { ...findProduct };

        this.state.productosAlCarrito.push({
          ...nuevoProd,
          quantity: 1,
          total: nuevoProd.precio,
        });
      }
      localStorage.setItem(
        "carrito",
        JSON.stringify(this.state.productosAlCarrito)
      );
    },
    vaciarProductos(state) {
      state.productosAlCarrito = [];
    },
    setCarrito(state) {
      state.productosAlCarrito =
        JSON.parse(localStorage.getItem("carrito")) || [];
    },
  },
  actions: {
    async toProductos({ commit }) {
      let result = null;
      await axios
        .get(`${process.env.VUE_APP_API_URL}/api/producto`)
        .then((response) => {
          let result = response.data.map((item) => {
            let { id, marca, modelo, peso, precio, drop, img } = item;
            return { id, marca, modelo, peso, precio, drop, img };
          });
          return result;
        })
        .catch((err) => {
          console.log(`${err}`);
        });
      if (result != null) {
        commit("setProductosLista", result);
      }
    },
    toProductosAlCarrito({ commit, productoId }) {
      commit("setProductosAlCarrito", productoId);
    },
    setCarrito(context) {
      context.commit("setCarrito");
    },
    vaciarProductos(context) {
      context.commit("vaciarProductos");
    },
  },
  // modules: {
  //   productos
  // }
});
