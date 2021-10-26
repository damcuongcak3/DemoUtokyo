<template>
  <div id="app" class="wrapper">
    <Header />
    <LeftSideBar />
    <Content>
      <router-view></router-view>
    </Content>
    <!-- <RightSideBar /> -->
    <RightSideBar>
      <router-view name="rightcontent"></router-view>
    </RightSideBar>
    <b-form-input class="w-75" placeholder="Email address"></b-form-input>
  </div>
</template>

<script>
import Header from "./components/view/Header.vue";
import LeftSideBar from "./components/view/LeftSideBar";
import Content from "./components/view/Content";
import RightSideBar from "./components/view/RightSideBar";

export default {
  name: "App",
  components: {
    Header,
    LeftSideBar,
    Content,
    RightSideBar,
  },
  methods: {},
};
</script>

<style lang="css">
</style>



