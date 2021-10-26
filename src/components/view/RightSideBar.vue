<template>
  <div class="right-side-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
@import "../../styles/rightsidebar.scss";
.right-side-bar {
  border-top: 1px solid #E2E5E6;
  width: 20%;
  position: absolute;
  height: auto;
  right: 0;
  top: 104px;
}
</style>