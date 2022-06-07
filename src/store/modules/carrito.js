import apiServices from "@/services/apiServices";

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async Comprar({ commit }) {
      const compra = {
        marca: this.productosAlCarrito.marca,
        modelo: this.productosAlCarrito.modelo,
        precio: this.productosAlCarrito.precio,
        quantity: this.totalQuantity,
        total: this.totalFinal,
      };
      await apiServices.setCompra(compra);
      if (compra != null) {
        console.log(commit);
      }
    },
  },
};
