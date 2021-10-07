import Vue from 'vue';
import App from './App.vue';

import store from './store';
import router from './router';
import modal from './plugins/modalWindow';
import optionsPayment from './plugins/OptionsPayment';

Vue.config.productionTip = false;
Vue.use(modal);
Vue.use(optionsPayment);

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
