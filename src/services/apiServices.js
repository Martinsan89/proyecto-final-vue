import axios from "axios";
const apiUrl = "https://628e2cc9a339dfef87a8fd8c.mockapi.io";

const apiServices = {
  getProductos: async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/producto`);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  getUsers: async () => {
    await axios
      .get(`${apiUrl}/corredores`)
      .then((response) => {
        let result = response.data.corredor.map((item) => {
          let { id, nombre, email, pass, edad, isAdmin } = item;
          return { id, nombre, email, pass, edad, isAdmin };
        });
        return result;
      })
      .catch((err) => console.log(err));
  },
  setCompra: async () => {
    await axios
      .post(
        `${process.env.VUE_APP_API_URL}/api/corredor/${this.user.id}/compras`,
        compra
      )
      .then((response) => {
        let result = response.data;
        return result;
      })
      .catch((err) => console.log(err));
  },
};

export default apiServices;
