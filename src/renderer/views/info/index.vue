<template>
  <div class="interests-content-wrap">
    <Tabs
      @handleSelTab="handleSelTab"
      @handleSubSelTab1="handleSubSelTab1"
      @handleSubSelTab2="handleSubSelTab2"
    ></Tabs>
    <div class="interests-content" :class="selTab === 1 ? 'change' : ''">
      <UserBaseInfo v-show="showUserBaseInfo"></UserBaseInfo>
      <OrderInfo v-show="selTab == 1 && selSubTab1 == 5"></OrderInfo>
      <diagnose-archive v-show="selTab == 1 && selSubTab1 == 3"></diagnose-archive>
      <RecommendGood v-show="selTab == 2 && selSubTab2 == 1"></RecommendGood>
      <RegisterService v-show="selTab == 2 && selSubTab2 == 2"></RegisterService>
      <consultationRecords v-show="selTab == 1 && selSubTab1 == 2"></consultationRecords>
      <LegalRight v-show="selTab == 1 && selSubTab1 == 4"></LegalRight>
    </div>
  </div>
</template>
<script>
import ConsultationRecords from "./consultationRecords/index";
import DiagnoseArchive from "./diagnoseArchive/index";
export default {
  components: {
    ConsultationRecords,
    DiagnoseArchive
  },
  data() {
    return {
      selTab: 1, // 外层tab  1 客户信息  2 快捷服务 3 待办提醒
      selSubTab1: 1, // 内层tab 1 基础信息 2 问诊记录 3 问诊档案 4 权益信息 5 订单信息
      selSubTab2: 1 // 内层tab 1 推荐商品 2 挂号服务
    };
  },
  computed: {
    showUserBaseInfo() {
      return this.selTab === 1 && this.selSubTab1 === 1;
    }
  },
  methods: {
    handleSelTab(selTab) {
      this.selTab = selTab;
    },
    handleSubSelTab1(selSubTab1) {
      this.selSubTab1 = selSubTab1;
    },
    handleSubSelTab2(selSubTab2) {
      this.selSubTab2 = selSubTab2;
      console.log(`=========>${selSubTab2}`);
    }
  }
};
</script>
<style lang="scss">
.interests-content-wrap {
      box-sizing: border-box;
      padding: 10px 10px 0;
      background: #f2f5f8;
      height: 100%;
      overflow: hidden;
      .interests-content {
        padding: 10px 10px 0;
        background: #ffffff;
        height: 100%;
        box-sizing: border-box;
        overflow: scroll;
      }
}
</style>


