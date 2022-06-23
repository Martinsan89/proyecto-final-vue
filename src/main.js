import Vue from "vue";
import App from "./App.vue";
import router from "./routers/router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store/index";
import VueToastr2 from "vue-toastr-2";
import "vue-toastr-2/dist/vue-toastr-2.min.css";
import axios from "axios";

window.toastr = require("toastr");
Vue.use(VueToastr2);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;


new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
