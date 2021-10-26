<template>
  <div class="right-content">
    <b-card>
      <b-card-title><span>ステータス </span></b-card-title>
      <b-card-body>
        <h6>Media in Japan in the World</h6>
        <div class="select-option row">
          <label class="col" for="vStatus"><span>ステータス: </span></label>
          <b-form-select v-model="selected" :options="options1" id="vStatus">
          </b-form-select>
        </div>
        <div class="select-option row">
          <label class="col" for="vStatus1"><span>審査担当:</span></label>
          <b-form-select v-model="selected1" :options="options2" id="vStatus1">
          </b-form-select>
        </div>
        <!-- <div class="select-option row">
            <label for="optionStatus">ステータス：</label>
            <select class="form-select" name="" id="optionStatus">
              <option value="">Option1</option>
              <option value="">Option2</option>
            </select>
          </div> -->
        <div class="divider"></div>
      </b-card-body>
    </b-card>
    <b-card>
      <b-card-body>
        <h6>Law in Transnational East Asia</h6>
        <b-card-text>
          <h6>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.65625 10.3438L11.6562 4.34375L10.7188 3.375L5.65625 8.4375L3.28125 6.0625L2.34375 7L5.65625 10.3438ZM2.28125 2.3125C3.59375 1 5.16667 0.34375 7 0.34375C8.83333 0.34375 10.3958 1 11.6875 2.3125C13 3.60417 13.6562 5.16667 13.6562 7C13.6562 8.83333 13 10.4062 11.6875 11.7188C10.3958 13.0104 8.83333 13.6562 7 13.6562C5.16667 13.6562 3.59375 13.0104 2.28125 11.7188C0.989583 10.4062 0.34375 8.83333 0.34375 7C0.34375 5.16667 0.989583 3.60417 2.28125 2.3125Z"
                fill="#3C64B1"
              ></path>
            </svg>
            合格
          </h6>
          <p>Yuta Matsuzaki</p>
        </b-card-text>
        <div class="divider"></div>
      </b-card-body>
    </b-card>
    <b-card>
      <b-card-body>
        <h6>Step up Japanese for Upper Beginners</h6>
        <b-card-text>
          <h6>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.21875 10.7812C4.28125 11.8229 5.54167 12.3438 7 12.3438C8.45833 12.3438 9.70833 11.8229 10.75 10.7812C11.8125 9.71875 12.3438 8.45833 12.3438 7C12.3438 5.54167 11.8125 4.29167 10.75 3.25C9.70833 2.1875 8.45833 1.65625 7 1.65625C5.54167 1.65625 4.28125 2.1875 3.21875 3.25C2.17708 4.29167 1.65625 5.54167 1.65625 7C1.65625 8.45833 2.17708 9.71875 3.21875 10.7812ZM2.28125 2.3125C3.59375 1 5.16667 0.34375 7 0.34375C8.83333 0.34375 10.3958 1 11.6875 2.3125C13 3.60417 13.6562 5.16667 13.6562 7C13.6562 8.83333 13 10.4062 11.6875 11.7188C10.3958 13.0104 8.83333 13.6562 7 13.6562C5.16667 13.6562 3.59375 13.0104 2.28125 11.7188C0.989583 10.4062 0.34375 8.83333 0.34375 7C0.34375 5.16667 0.989583 3.60417 2.28125 2.3125ZM3.65625 6.34375H10.3438V7.65625H3.65625V6.34375Z"
                fill="#3C64B1"
              ></path>
            </svg>
            不合格
          </h6>
          <p>Yuta Matsuzaki</p>
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      options1: [
        { value: null, text: "Yuta Matsuzaki " },
        { value: 1, text: "Option1" },
        { value: 2, text: "Option2" },
      ],
      selected1: null,
      options2: [
        { value: null, text: "Matsuzaki" },
        { value: 1, text: "Option3" },
        { value: 2, text: "Option4" },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
@import "../../styles/rightsidebar.scss";
</style>