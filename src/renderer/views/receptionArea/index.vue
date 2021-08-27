<template>
  <div class="reception-area-wrap">
    <div class="queue-note-wrap not-select">
      <div class="text-wrap">当前诊室排队人数:<span class="color">{{ '10' }}</span>人</div>
      <!-- 切换tab -->
      <div class="tab-wrap">
        <ReceptionTab
          @handleSelTab="handleSelTab"
          @handleTabAllPatient="handleTabAllPatient">
        </ReceptionTab>
      </div>

      <div class="list-content-wrap">
        <div class="online-wrap" v-show="selTab == 1">
          <!-- 在线-家庭医生 -->
          <div class="sel-title-wrap" @click="handleToggle(1)">
            <SelTitle
              :titleType="1"
              :toggleType1="toggleType1"
              :selTitleObj="selTitleObj"></SelTitle>
          </div>
          <div class="list-wrap" v-show="toggleType1">
            <ListItem
              v-for="(item, index) in familyDoctorListOnline"
              :key="index"></ListItem>
          </div>

          <!-- 在线-快速问诊 -->
          <div class="sel-title-wrap" @click="handleToggle(2)">
            <SelTitle
              :titleType="2"
              :toggleType2="toggleType2"
              :selTitleObj="selTitleObj"></SelTitle>
          </div>
          <div class="list-wrap" v-show="toggleType2">
            <ListItem
              v-for="(item, index) in quickConsultListOnline"
              :key="index"></ListItem>
          </div>
        </div>
        <div class="to-be-archived-wrap" v-show="selTab == 2">
          <!-- 待归档-家庭医生 -->
          <div class="sel-title-wrap" @click="handleToggle(3)">
            <SelTitle
              :titleType="3"
              :toggleType3="toggleType3"
              :selTitleObj="selTitleObj"></SelTitle>
          </div>
          <div class="list-wrap" v-show="toggleType3">
            <ListItem
              v-for="(item, index) in familyDoctorList"
              :key="index"></ListItem>
          </div>
          <!-- 待归档-快速问诊 -->
          <div class="sel-title-wrap" @click="handleToggle(4)">
            <SelTitle
              :titleType="4"
              :toggleType4="toggleType4"
              :selTitleObj="selTitleObj"></SelTitle>
          </div>
          <div class="list-wrap" v-show="toggleType4">
            <ListItem
              v-for="(item, index) in quickConsultList"
              :key="index"></ListItem>
          </div>
        </div>
        <!-- 所有患者 -->
        <div class="all--wrap" v-show="showAllPatientsPop">
          <AllPatientPop
            @handleHideAllPatientsPop="handleHideAllPatientsPop"></AllPatientPop>
        </div>
      </div>

    </div>

  </div>

</template>
<script>
export default {
  data () {
    return {
      selTab: 1, // 1 在线 2 待归档 3 所有患者
      toggleType1: true, // 切换 在线-家庭医生折叠
      toggleType2: false, // 切换 在线-快速问诊折叠
      familyDoctorListOnline: [1, 2, 3, 4, 5, 6, 7], // 在线-家庭医生list
      quickConsultListOnline: [1, 2, 3, 4, 5, 6, 7], // 在线-快速咨询list
      toggleType3: true, // 切换 归档-家庭医生折叠
      toggleType4: false, // 切换 归档-快速问诊折叠
      familyDoctorList: [1, 2, 3, 4, 5, 6, 7], // 归档-家庭医生list
      quickConsultList: [1, 2, 3, 4, 5, 6, 7], // 归档-快速咨询list
      selTitleObj: { // selTitle显示数字(包含在线和归档)
        online1: 6,
        online2: 10,
        offline1: 3,
        offline2: 5
      },
      showAllPatientsPop: false // 显示所有患者pop

    }
  },
  methods: {
    handleSelTab (selTab) {
      this.selTab = selTab
    },
    handleTabAllPatient () {
      this.showAllPatientsPop = true
    },
    handleToggle (num) {
      this[`toggleType${num}`] = !this[`toggleType${num}`]
    },
    handleHideAllPatientsPop () {
      this.showAllPatientsPop = false
    }
  }
}
</script>
<style lang="scss" scoped>
.reception-area-wrap{
  width: $leftSideWidth;
  min-width: $leftSideWidth;
  height: 100%;
  overflow: hidden;
  color: $fontColor;
  background: #ffffff;
  border: 1px solid #F2F2F2;
  .queue-note-wrap{
    height: 30px;
    line-height: 30px;
    background: #EBF3FF;
    box-sizing: border-box;
    padding: 0 10px;
    text-align: center;
    .text-wrap{
      font-size: 16px;
      font-weight: 700;
      .color{
        color: $color;
      }
    }
  }
  .list-wrap{
    height: 330px;
    overflow-y: scroll;
    padding-bottom: 16px;
  }
}
::-webkit-scrollbar {
    width: 2px;
    height: 5px;
}

::-webkit-scrollbar-track-piece {
    background-color: #ffffff;
    -webkit-border-radius: 3px;
}

::-webkit-scrollbar-thumb:vertical {
    height: 5px;
    background-color: #ffffff;
    -webkit-border-radius: 3px;
}

::-webkit-scrollbar-thumb:horizontal {
    width: 2px;
    background-color: rgba(125, 125, 125, 0.4);
    -webkit-border-radius: 3px;
}
</style>
