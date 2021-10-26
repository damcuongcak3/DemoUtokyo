<template>
  <div class="left-side-bar">
    <b-nav class="mt-2" vertical v-for="menu in menus" :key="menu.id">
      <b-nav-item :to="menu.link">{{ menu.title }}</b-nav-item>
      <!-- <b-nav-item active href="#">コース設定</b-nav-item>
      <b-nav-item>出願者一覧</b-nav-item>

      <b-nav-item-dropdown text="申込設定" id="dropdown-menu">
        <label class="dropdown-menu" for="dropdown-menu"
          ><svg
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.32031 0L6.32031 5L1.32031 10L0.148438 8.82812L3.97656 5L0.148438 1.17188L1.32031 0Z"
              fill="#737B7D"
            />
          </svg>
        </label>
        <b-dropdown-item>One</b-dropdown-item>
        <b-dropdown-item>Two</b-dropdown-item>
        <b-dropdown-item>Three</b-dropdown-item>
      </b-nav-item-dropdown> -->
    </b-nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        { id: "001", title: "コース設定", link: "/" },
        { id: "002", title: "出願者一覧", link: "/" },
        { id: "003", title: "申込設定", link: "/PageUser" },
        { id: "004", title: "Table", link: "/PageTable" },
      ],
    };
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "../../styles/leftsidebar.scss";
</style>