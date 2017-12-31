import VueRouter from 'vue-router';

const Home = resolve => require(['../containers/home/home.vue'], resolve);
const NotFound = resolve => require(['../containers/not-found/not-found.vue'], resolve);

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
  }, {
    path: '*',
    name: 'notFound',
    component: NotFound,
  }],
});
