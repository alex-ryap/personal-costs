import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';
import AddPayment from '../views/AddPayment.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/dashboard/:page',
      name: 'dashboardWithParams',
      component: Dashboard,
    },
    {
      path: '/about*',
      name: 'about',
      component: About,
    },
    {
      path: '/add/payment',
      name: 'addPayment',
      component: AddPayment,
    },
    {
      path: '/add/payment/:category',
      name: 'addPaymentWithParams',
      component: AddPayment,
    },
    {
      path: '/404',
      name: 'notfound',
      component: NotFound,
    },
    {
      path: '*',
      // component: NotFound,
      // redirect: '/404',
      redirect: {
        name: 'notfound',
      },
    },
  ],
});

export default router;
