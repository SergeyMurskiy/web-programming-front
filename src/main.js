import Vue from 'vue'
import App from "./App.vue"
import router from './router'
import Argon from "./plugins/argon-kit"

Vue.use(Argon);
Vue.config.productionTip = false;

Vue.prototype.url = "http://" + window.location.hostname + ":8080";

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});
