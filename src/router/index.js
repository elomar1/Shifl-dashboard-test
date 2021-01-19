import Vue from "vue";
import VueRouter from "vue-router";
import Dashboad from "../views/Dashboad.vue";
import Shipments from "../views/Shipments.vue";
import Pos from "../views/Pos.vue";
import Items from "../views/Items.vue";
import Inventory from "../views/Inventory.vue";
import Suppliers from "../views/Suppliers.vue";
import Reports from "../views/Reports.vue";
import Billing from "../views/Billing.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/dashboad",
    name: "Dashboad",
    component: Dashboad
  },
  {
    path: "/shipments",
    name: "Shipments",
    component: Shipments,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/pos",
    name: "Pos",
    component: Pos
  },
  {
    path: "/items",
    name: "Items",
    component: Items
  },
  {
    path: "/inventory",
    name: "Inventory",
    component: Inventory
  },
  {
    path: "/suppliers",
    name: "Suppliers",
    component: Suppliers
  },
  {
    path: "/reports",
    name: "Reports",
    component: Reports
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
