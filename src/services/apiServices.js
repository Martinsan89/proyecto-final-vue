import axios from "axios";
const apiUrl = "https://628e2cc9a339dfef87a8fd8c.mockapi.io/api";

const apiServices = {
  getProductos: async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/producto`);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  getUsers: async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/corredor`);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default apiServices;
