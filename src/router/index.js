import Vue from "vue";
import Router from "vue-router";
// import App from "../App";
import Table from "../components/view/PageTable";
import User from "../components/layout/UserInfor";
import RightUser from "../components/layout/RightUserInfor";
// import RightSideBar from "../components/view/RightSideBar";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/PageTable",
      name: "TableUser",
      component: Table
    },
    {
      path: "/PageUser",
      components: {
        default: User,
        rightcontent: RightUser
      }
    }
  ]
});
