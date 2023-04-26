import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HelloWorld.vue";
import Upload from "../components/UploaderCmp.vue";
import Team from "../components/TeamMembers.vue";
import NotFound from "../components/NotFound.vue";
import ProgressPage from "../components/ProgressPage.vue";




const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/progress", name: "progress", component: ProgressPage },
    { path: "/records", name: "records", component: Upload },
    { path: "/team", name: "team", component: Team },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});



export default router;