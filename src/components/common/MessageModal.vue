<template>
  <b-modal class="ErrorModal" ref="messageModal" title="">
    <span> 合否通知を送信しました。</span>
  </b-modal>
</template>

<script>
export default {
  data() {},
  methods: {
    showMessageModal() {
      this.$refs.messageModal.show();
    },
  },
};
</script>

<style>
</style>