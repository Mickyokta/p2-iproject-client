import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SteamLogin from "../views/SteamLogin.vue";
import MainView from "../views/MainView.vue"
import ExtraStatsView from "../views/ExtraStatsView.vue"
import VideoView from "../views/VideoView.vue"
import AddVideoView from "../views/AddVideoView.vue"
import EditVideoView from "../views/EditVideoView.vue"
import DeleteVideoView from "../views/DeleteVideoView.vue"
import OtherView from "../views/OtherView.vue"
import LiveChatView from "../views/LiveChatView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/steamlogin",
      name: "steamlogin",
      component: SteamLogin,
    },
    {
      path: "/stats",
      name: "stats",
      component: MainView,
    },
    {
      path: "/stats/extras",
      name: "extrastats",
      component: ExtraStatsView,
    },
    {
      path: "/videos",
      name: "videos",
      component: VideoView,
    },
    {
      path: "/videos/delete",
      name: "deletevideos",
      component: DeleteVideoView,
    },
    {
      path: "/videos/add",
      name: "addvideo",
      component: AddVideoView,
    },
    {
      path: "/videos/edit/:id",
      name: "editvideo",
      component: EditVideoView,
    },
    {
      path: "/others",
      name: "others",
      component: OtherView,
    },
    {
      path: "/others/chats",
      name: "chats",
      component: LiveChatView,
    }
  ],
});
router.beforeEach((to, from) => {
  if ((localStorage.getItem("steamid") && to.name == "login") || (localStorage.getItem("steamid") && to.name == "steamlogin")) {
    return { name: "home" }
  }
  if ((!localStorage.getItem("steamid") && to.name == "stats") || (!localStorage.getItem("steamid") && to.name == "chats")
    || (!localStorage.getItem("steamid") && to.name == "extrastats") || (!localStorage.getItem("steamid") && to.name == "home")
    || (!localStorage.getItem("steamid") && to.name == "videos") || (!localStorage.getItem("steamid") && to.name == "deletevideos")
    || (!localStorage.getItem("steamid") && to.name == "addvideos") || (!localStorage.getItem("steamid") && to.name == "others")) {
    return { name: "login" }
  }
  if (!to.name) {
    return { name: "login" }
  }
})
export default router;
