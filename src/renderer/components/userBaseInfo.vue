<template>
  <div class="base-info-wrap">
    <div class="title">家庭医生服务</div>
    <div class="group-list-wrap">
      <!-- 家庭医生group -->
      <GroupItem
        v-for="(item, index) in familyGroupList"
        :key="index"
        @handleShowMarkPop="handleShowMarkPop"
        @handleShowAddMemberPop="handleShowAddMemberPop"></GroupItem>
    </div>
    <!-- 添加备注pop -->
    <markPop
      v-show="showMarkPop"
      @handleHideMarkPop="handleHideMarkPop"></markPop>
    <!-- 添加新成员pop -->
    <addNewMemberPop
      v-show="showAddMemberPop"
      @handleHideAddMemberPop="handleHideAddMemberPop">

    </addNewMemberPop>
    <!-- CRM标签 -->
  </div>
</template>

<script>
export default {
  name: 'userBaseInfo',
  data () {
    return {
      showMarkPop: false, // 添加备注
      showAddMemberPop: false, // 添加新成员
      familyGroupList: [1, 2, 3] // familyGroupList
    }
  },
  methods: {
    handleShowMarkPop () {
      this.showMarkPop = true
    },
    handleHideMarkPop () {
      this.showMarkPop = false
    },
    handleShowAddMemberPop () {
      this.showAddMemberPop = true
    },
    handleHideAddMemberPop () {
      this.showAddMemberPop = false
    }
  }
}
</script>

<style lang="scss" scoped>
.base-info-wrap{
  padding-bottom: 150px;
  .title{
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #202020;
    margin-bottom: 13px;
  }
  .group-list-wrap{
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
