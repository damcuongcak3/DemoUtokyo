<template>
  <section class="infor-table">
    <b-row class="mt-2">
      <b-col>
        <h3 class="left-content-title mt-2">
          UTokyo Global Unit Courses 2022年夏季
        </h3>
      </b-col>
    </b-row>
    <b-row> <h4>出願者一覧</h4> </b-row>
    <b-row class="d-flex justify-content-between">
      <div class="filter key-filter">
        <label for="txtSearch"
          ><svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.74609 7.52734C3.40234 8.18359 4.19922 8.51172 5.13672 8.51172C6.07422 8.51172 6.87109 8.18359 7.52734 7.52734C8.18359 6.87109 8.51172 6.07422 8.51172 5.13672C8.51172 4.19922 8.18359 3.40234 7.52734 2.74609C6.87109 2.08984 6.07422 1.76172 5.13672 1.76172C4.19922 1.76172 3.40234 2.08984 2.74609 2.74609C2.08984 3.40234 1.76172 4.19922 1.76172 5.13672C1.76172 6.07422 2.08984 6.87109 2.74609 7.52734ZM9.63672 8.51172L13.3633 12.2383L12.2383 13.3633L8.51172 9.63672V9.03906L8.30078 8.82812C7.41016 9.60156 6.35547 9.98828 5.13672 9.98828C3.77734 9.98828 2.61719 9.51953 1.65625 8.58203C0.71875 7.64453 0.25 6.49609 0.25 5.13672C0.25 3.77734 0.71875 2.62891 1.65625 1.69141C2.61719 0.730469 3.77734 0.25 5.13672 0.25C6.49609 0.25 7.64453 0.730469 8.58203 1.69141C9.51953 2.62891 9.98828 3.77734 9.98828 5.13672C9.98828 5.62891 9.87109 6.19141 9.63672 6.82422C9.40234 7.43359 9.13281 7.92578 8.82812 8.30078L9.03906 8.51172H9.63672Z"
              fill="#737B7D"
            />
          </svg>
        </label>
        <input class="key-filter" type="text" id="txtSearch" />
      </div>
      <div class="filter">
        <label for="slcCourse"><span>コース：</span></label>
        <b-form-select v-model="selectCourse" :options="course" id="slcCourse">
        </b-form-select>
      </div>
      <div class="filter">
        <label for="slcStatus"><span>ステータス：</span></label>
        <b-form-select v-model="selectStatus" :options="status" id="slcStatus">
        </b-form-select>
      </div>
      <div class="filter">
        <label for="slcJudge"><span>審査担当：</span></label>
        <b-form-select v-model="selectJudge" :options="judge" id="slcJudge">
        </b-form-select>
      </div>
    </b-row>
    <b-row align-h="between" class="sub-title">
      <span> 名を選択中</span>
      <b-button @click="show()"
        ><svg
          width="15"
          height="12"
          viewBox="0 0 15 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.34375 12V7.34375L10.3438 6L0.34375 4.65625V0L14.3438 6L0.34375 12Z"
            fill="#3C64B1"
          ></path>
        </svg>
        合否発表通知を送信
      </b-button>
    </b-row>
    <b-table-simple responsive>
      <b-thead>
        <b-tr>
          <b-th>
            <input type="checkbox" />
            <span>No.</span>
          </b-th>
          <b-th><span></span></b-th>
          <b-th><span></span></b-th>
          <b-th><span>管理者</span></b-th>
          <b-th><span>最終更新</span></b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="student in students" :key="student.num">
          <td>
            <input type="checkbox" /><span>{{ student.num }}</span>
          </td>

          <td>
            <span>{{ student.fullname }}</span>
          </td>
          <td>
            <span>{{ student.status }}</span>
          </td>
          <td>
            <span>{{ student.teacher }}</span>
          </td>
          <td>
            <span>{{ student.date }}</span>
          </td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <button @click="sum()">Count</button>
    <ConfirmModal ref="confirmmodal"></ConfirmModal>
  </section>
</template>
<script>
import ConfirmModal from "../common/ConfirmSendMailModal";
export default {
  components: {
    ConfirmModal,
  },
  methods: {
    show() {
      // console.log(this.$refs.abc);
      this.$refs.confirmmodal.showModal();
    },
    sum() {
      var checkboxes = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      alert(checkboxes.length);
    },
  },

  data() {
    return {
      students: [
        {
          id: "01",
          num: "0001",
          fullname: " Ashlynn Aaron	",
          status: "合格",
          teacher: "Yuta Matsuzaki",
          date: "2021/6/7 12:31",
        },
        {
          id: "02",
          num: "0002",
          fullname: " Ashlynn 2	",
          status: "合格",
          teacher: "Yuta Matsuzaki",
          date: "2021/6/7 12:31",
        },
        {
          id: "03",
          num: "0003",
          fullname: " Ashlynn 3	",
          status: "合格",
          teacher: "Yuta Matsuzaki",
          date: "2021/6/7 12:31",
        },
      ],
      selectCourse: "1",
      course: [
        { value: "1", text: "すべて" },
        { value: "2", text: "Option1" },
      ],
      selectJudge: "1",
      judge: [
        { value: "1", text: "すべて" },
        { value: "2", text: "Option3" },
      ],
      selectStatus: "1",
      status: [
        { value: "1", text: "合格" },
        { value: "2", text: "Option2" },
      ],
      checkedNumber: [],
    };
  },
  computed: {
    count() {
      // var checkboxes = document.querySelectorAll(
      //   'input[type="checkbox"]:checked'
      // );
      // var count= checkboxes.length
      // return count;

      return this.students.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
      }, 0);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/table.scss";
</style>