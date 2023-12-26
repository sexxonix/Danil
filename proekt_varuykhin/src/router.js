import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import Services from "@/components/Services.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/services", component: Services },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

const router = new VueRouter({
  routes,
});

export default router;
