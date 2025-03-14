import path from "path";
import { createMemoryHistory, createRouter } from "vue-router";
import AboutView from "../view/AboutView.vue";

const routes = [
  { path: "/", component: () => import("@/view/HomeView.vue") },
  { path: "/about", name: "about", component: AboutView },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
