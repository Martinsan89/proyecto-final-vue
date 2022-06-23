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
    SetUsers(state, payload) {
      state.users = payload;
    },
    SaveUserLogged(state, data) {
      state.userLogged = {...data};//Para hacer una copia
      delete state.userLogged.pass;
      localStorage.setItem(state.storageUserKey, JSON.stringify(data));
    },
    LogOff(state) {
      localStorage.removeItem(state.storageUserKey);
      state.userLogged = null;
    },
    TrySetUserLoggedFromLocalStorage: (state) => {
      state.userLogged = JSON.parse(localStorage.getItem(state.storageUserKey));
    },
  },
  actions: {
    SetUsers: async ({ commit }) => {
      await apiServices
        .getUsers()
        .then((result) => commit("SetUsers", result))
        .catch((err) => console.log(err));
    },
    SaveUserLogged({ commit }, data) {
      commit("SaveUserLogged", data);
    },
    LogOff: (context) => {
      context.commit("LogOff");
    },
    TrySetUserLoggedFromLocalStorage: (context) => {
      context.commit("TrySetUserLoggedFromLocalStorage");
    },
  },
};
