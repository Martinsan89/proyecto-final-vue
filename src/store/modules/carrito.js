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
    getProdContador: (state) => {
      return state.prodContador;
    },
  },
  mutations: {
    setProductosEnCarrito: (state, producto) => {
      const prodEnCarrito = state.productosEnCarrito.find(
        (product) => product.id === producto.id
      );
      if (prodEnCarrito) {
        prodEnCarrito.total = prodEnCarrito.quantity * prodEnCarrito.precio;
      } else {
        state.productosEnCarrito.push({
          id: producto.id,
          marca: producto.marca,
          modelo: producto.modelo,
          precio: producto.precio,
          quantity: producto.quantity,
          stock: producto.stock,
          total: producto.precio * producto.quantity,
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
    setSumar: (state, producto) => {
      const prodEnCarrito = state.productosEnCarrito.find(
        (product) => product.id === producto.id
      );
      if (prodEnCarrito) {
        prodEnCarrito.quantity++;
        prodEnCarrito.total =
          parseInt(prodEnCarrito.precio) * parseInt(prodEnCarrito.quantity);
      }
    },
    setRestar: (state, producto) => {
      const prodEnCarrito = state.productosEnCarrito.find(
        (product) => product.id === producto.id
      );
      if (prodEnCarrito) {
        if (prodEnCarrito.quantity <= 1) {
          const filtro = state.productosEnCarrito.filter(
            (item) => item.id !== prodEnCarrito.id
          );
          localStorage.setItem("carrito", JSON.stringify(filtro));
          state.productosEnCarrito =
            JSON.parse(localStorage.getItem("carrito")) || [];
        } else {
          prodEnCarrito.quantity--;
        }
        prodEnCarrito.total =
          parseInt(prodEnCarrito.precio) * parseInt(prodEnCarrito.quantity);
      }
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
    toSetSumar: ({ commit }, producto) => {
      commit("setSumar", producto);
    },
    toSetRestar: ({ commit }, producto) => {
      commit("setRestar", producto);
    },
  },
};
