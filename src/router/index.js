import { createRouter, createWebHistory } from "vue-router";
import AccueilView from "../views/AccueilView.vue";
import AproposView from "../views/AproposView.vue";
import ContactView from "../views/ContactView.vue";
import ProjetMontainClimberView from "../views/ProjetMontainClimberView.vue";
import ProjetCaMatchView from "../views/ProjetCaMatchView.vue";
import ProjetVelotafView from "../views/ProjetVelotafView.vue";
import ProjetOlympeView from "../views/ProjetOlympeView.vue";
import ProjetRampageView from "../views/ProjetRampageView.vue";
import ProjetBorneView from "../views/ProjetBorneView.vue";
import ProjetWebjamView from "../views/ProjetWebjamView.vue";
import testView from "../views/testView.vue";
import ProjetFirstStoneView from "../views/ProjetFirstStoneView.vue";

import Page404View from "../views/Page404View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Accueil", component: AccueilView },
    { path: "/apropos", name: "AproposView", component: AproposView },
    { path: "/contact", name: "ContactView", component: ContactView },
    { path: "/rampage", name: "ProjetRampageView", component: ProjetRampageView },
    { path: "/montainclimber", name: "ProjetMontainClimberView", component: ProjetMontainClimberView },
    { path: "/camatch", name: "ProjetCaMatchView", component: ProjetCaMatchView },
    { path: "/velotaf", name: "ProjetVelotafView", component: ProjetVelotafView },
    { path: "/olympe", name: "ProjetOlympeView", component: ProjetOlympeView },
    { path: "/borne", name: "ProjetBorneView", component: ProjetBorneView },
    { path: "/test", name: "testView", component: testView },
    { path: "/webjam", name: "ProjetWebjamView", component: ProjetWebjamView },
    { path: "/firststone", name: "ProjetFirstStoneView", component: ProjetFirstStoneView },

    //page 404


    {
      path: "/:catchAll(.*)",
      name: "Page404View",
      component: Page404View,
    },

    // ici les autre routes
  ],


  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  },




});

export default router;
