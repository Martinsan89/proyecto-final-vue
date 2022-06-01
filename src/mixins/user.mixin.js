export default {
  data() {
    return {
      userLogged: null,
      storageUserKey: "UsuarioGuardado",
    };
  },
  created() {
    this.userLogged = JSON.parse(localStorage.getItem(this.storageUserKey));
  },
  methods: {
    SaveUserLoggedInStorage(user) {
      this.userLogged = user;
      localStorage.setItem(this.storageUserKey, JSON.stringify(user));
    },
    RedirectToLoginIfLoggedUserIsNotAdmin() {
      if (this.userLogged?.isAdmin == false) {
        this.$router.push({ name: UserLogin });
      }
      return true;
    },
  },
};
