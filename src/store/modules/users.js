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
    getUserLogged(state) {
      return state.userLogged;
    },
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setSaveUserLoggedInStorage(state, data) {
      state.userLogged = data;
      localStorage.setItem(state.storageUserKey, JSON.stringify(data));
    },
    setDropUser(state) {
      localStorage.removeItem(state.storageUserKey);
    },
    setUserLogged: (state) => {
      state.userLogged = JSON.parse(localStorage.getItem(state.storageUserKey));
    },
  },
  actions: {
    toSetUsers: ({ commit }) => {
      apiServices
        .getUsers()
        .then((result) => commit("setUsers", result))
        .catch((err) => console.log(err));
    },
    toSaveUserLoggedInStorage({ commit }, data) {
      commit("setSaveUserLoggedInStorage", data);
    },
    toDropUser: (context) => {
      context.commit("setDropUser");
    },
    toSetUserLogged: (context) => {
      context.commit("setUserLogged");
    },
  },
};
