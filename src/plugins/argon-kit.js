import "@/assets/vendor/nucleo/css/nucleo.css";
import "@/assets/vendor/font-awesome/css/font-awesome.css";
import "@/assets/scss/argon.scss";
import "@/assets/css/style.css"
import globalComponents from "./globalComponents";

export default {
  install(Vue) {
    Vue.use(globalComponents);
  }
};
