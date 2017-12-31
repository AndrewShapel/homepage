import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';

import router from './router/router';

import Application from './containers/application/application.vue';

import 'normalize.css';

Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VeeValidate);

new Vue({
  el: '.root',
  i18n: require('./i18n/i18n').default,
  router,
  components: {
    Application,
  },
});
