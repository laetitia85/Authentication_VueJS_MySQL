import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import store from "../store/store"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
    beforeEnter: ((to, from, next) => {
      // console.log(store.state.token);
      let x = to.matched.some((elem) => elem.meta.requiresAuth)
      console.log(x)
    
        if (x == true && store.state.token) {
          next();
        } else {
          next({
            path: "/",
            // params: { nextUrl: to.fullPath },
          });
        }
      }), 
    }
]
  const router = new VueRouter({
    mode: "history",
    routes,
  });


//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.

// () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
export default router;
