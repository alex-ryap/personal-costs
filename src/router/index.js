import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () =>
        import(
          /* webpackChunkName: "PageDashboard" */ '../views/Dashboard.vue'
        ),
    },
    {
      path: '/dashboard/:page',
      name: 'dashboardWithParams',
      component: () =>
        import(
          /* webpackChunkName: "PageDashboard" */ '../views/Dashboard.vue'
        ),
    },
    {
      path: '/about*',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "PageAbout" */ '../views/About.vue'),
    },
    {
      path: '/404',
      name: 'notfound',
      component: () =>
        import(/* webpackChunkName: "PageNotFound" */ '../views/NotFound.vue'),
    },
    {
      path: '*',
      redirect: {
        name: 'notfound',
      },
    },
  ],
});

export default router;
