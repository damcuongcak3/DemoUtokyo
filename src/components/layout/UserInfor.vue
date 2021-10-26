<template>
  <div>
    <b-row class="mt-2">
      <b-col>
        <h3 class="left-content-title mt-2">
          UTokyo Global Unit Courses 2022年夏季
        </h3>
      </b-col>
    </b-row>

    <b-row class="user-infor mb-2">
      <b-link class="mr-2" @click="goBack()">
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.42188 1.40625L2.82812 6L7.42188 10.5938L6.01562 12L0.015625 6L6.01562 0L7.42188 1.40625Z"
            fill="#737B7D"
          ></path>
        </svg>
      </b-link>
      <b-col>
        <b-avatar class="mr-1"></b-avatar>
        <span class="mr-auto">Ashlynn Aaron</span>
      </b-col>

      <b-col class="accesstime">
        <span>応募日時 2021/6/7 12:31</span>
        <span>最終更新 2021/6/7 12:31</span>
      </b-col>
    </b-row>
    <b-tabs card content-class="mt-4">
      <b-link @click="goBack()">
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.42188 1.40625L2.82812 6L7.42188 10.5938L6.01562 12L0.015625 6L6.01562 0L7.42188 1.40625Z"
            fill="#737B7D"
          ></path>
        </svg>
      </b-link>
      <b-tab title="申込内容">
        <b-row>
          <b-col md="7" sm="5" class="main-card-content">
            <b-card>
              <b-card-title>Notification of acceptance </b-card-title>
              <b-card-body class="">
                <b-card-text
                  >◇◇◇◇ My name is △△ from ○○ Co., Ltd. The other day, please
                  come to our employee recruitment test (final interview) Thank
                  you very much. As a result of the selection, ◇◇ will be our
                  employee on XX days. We will contact you as we have decided to
                  adopt it. Therefore, we will mail the documents to be
                  submitted today. Please return it by the deadline. If you have
                  any questions, our personnel recruitment group ○○ Please
                  contact (○○-○○○○-○○○○). All employees are welcomed to welcome
                  new human resources I am very happy. First of all, I'm sorry
                  to trouble you by email, but I would like to contact you.
                  Thank you very much.</b-card-text
                >
              </b-card-body>
            </b-card>
          </b-col>
          <b-col md="5" sm="6" class="text-right main-card-content">
            <b-card>
              <span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="#F4F5F4"></circle>
                  <path
                    d="M21.3333 22V20.6667C21.3333 19.9594 21.0524 19.2811 20.5523 18.781C20.0522 18.281 19.3739 18 18.6667 18H13.3333C12.6261 18 11.9478 18.281 11.4477 18.781C10.9476 19.2811 10.6667 19.9594 10.6667 20.6667V22"
                    stroke="#C3CBCD"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16 15.3333C17.4728 15.3333 18.6667 14.1394 18.6667 12.6667C18.6667 11.1939 17.4728 10 16 10C14.5272 10 13.3333 11.1939 13.3333 12.6667C13.3333 14.1394 14.5272 15.3333 16 15.3333Z"
                    stroke="#C3CBCD"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                Mayu Uchida 2021/6/7 12:31
              </span>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab title="申込内容"></b-tab>
    </b-tabs>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss">
.main-card-content {
  padding: 0px !important;
  margin-top: 15px;
}
.card-body {
  padding: 0px;
}
</style>