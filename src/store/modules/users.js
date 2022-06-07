import apiServices from "@/services/apiServices";

export default {
  namespaced: true,
  state: {
    users: [],
    userLogged: null,
    storageUserKey: "UsuarioGuardado",
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getUserLogged: (state) => {
      return (state.userLogged = JSON.parse(
        localStorage.getItem(this.storageUserKey)
      ));
    },
  },
  mutations: {
    setUsers(state, payload) {
      state.user = payload;
    },
    setSaveUserLoggedInStorage(state, data) {
      state.userLogged = data;
      localStorage.setItem(this.storageUserKey, JSON.stringify(data));
    },
    setDropUser(state) {
      localStorage.removeItem(state.storageUserKey);
    },
  },
  actions: {
    async toUsers({ commit }) {
      let result = null;
      await apiServices.getUsers();
      if (result != null) {
        commit("setUsers", result);
      }
    },
    toSaveUserLoggedInStorage({ commit }, data) {
      commit("setSaveUserLoggedInStorage", data);
    },
    toDropUser: (context) => {
      context.commit("setDropUser");
    },
  },
};
