// import apiServices from "@/services/apiServices";

export default {
  namespaced: true,
  state: {
    productosEnCarrito: [],
  },
  getters: {
    getProductosEnCarrito: (state) => {
      return state.productosEnCarrito;
    },
    getProductosEnCarritoLength: (state) => {
      return state.productosEnCarrito.length;
    },
  },
  mutations: {
    setProductosEnCarrito: (state, producto) => {
      const prodEnCarrito = state.productosEnCarrito.find(
        (product) => product.id === producto.id
      );

      if (prodEnCarrito) {
        prodEnCarrito.quantity++;
        prodEnCarrito.total = prodEnCarrito.quantity * prodEnCarrito.precio;
      } else {
        state.productosEnCarrito.push({
          ...producto,
          quantity: 1,
          total: producto.precio,
        });
      }
      localStorage.setItem("carrito", JSON.stringify(state.productosEnCarrito));
    },
    setVaciarProductos: (state) => {
      state.productosEnCarrito = [];
    },
    setCarrito: (state) => {
      state.productosEnCarrito =
        JSON.parse(localStorage.getItem("carrito")) || [];
    },
  },
  actions: {
    toProductosEnCarrito({ commit }, producto) {
      commit("setProductosEnCarrito", producto);
    },
    toSetCarrito: (context) => {
      context.commit("setCarrito");
    },
    toVaciarProductos: (context) => {
      context.commit("setVaciarProductos");
    },
  },
};
