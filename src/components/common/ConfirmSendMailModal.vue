<template>
  <b-modal
    class="mymessagemodal"
    ref="confirmmodal"
    size="lg"
    title=""
    ok-title="送信"
    cancel-title="送信"
  >
    <p>合否発表通知を送信します。この操作は取り消せません。 よろしいですか？</p>
  </b-modal>
</template>
<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    showModal: function () {
      this.$refs.confirmmodal.show();
      // this.visible = true;
    },
  },
};
</script>
<style lang="scss">
@import "../../styles/common/modal.scss";
</style>
