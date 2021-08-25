<template>
  <div class="group-wrap">
    <div class="id-wrap">
      <div class="group-id">Group ID: {{ '1323423424' }}</div>
      <div class="go-to-detail not-select">详情 ></div>
    </div>
    <div class="date-range">
      权益有效期：{{'2021.09.08' | formatDateDotted}}-{{'2022.09.08' | formatDateDotted}}
    </div>
    <div class="sub-title">家庭成员（{{ "3" }}/{{ "4" }}）</div>
    <div class="table-wrap">
      <div class="th-wrap">
        <div class="th-item" :class="item.id == 2 ? 'status' : ''" v-for="item in thItemList" :key="item.id">{{ item.name }}</div>
      </div>
      <div class="table-content">
        <TrItem
          class="tr-item"
          v-for="(item, index) in familyGroupTableList"
          :key="index"
          :itemObj="item"
          @handleShowMarkPop="handleShowMarkPop">
        </TrItem>
      </div>
    </div>
    <div class="handle-wrap" @click="handleShowAddMemberPop">
      <icon-svg class="svg" icon-class="icon-add"></icon-svg>
      <span class="text">添加新成员</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'groupItem',
  data () {
    return {
      thItemList: [{
        id: 1,
        name: '姓名'
      },
      {
        id: 2,
        name: '状态'
      },
      {
        id: 3,
        name: '角色'
      },
      {
        id: 4,
        name: '备注'
      },
      {
        id: 5,
        name: '操作'
      }],
      familyGroupTableList: [1, 2, 3]
    }
  },
  methods: {
    handleShowMarkPop (id) {
      this.$emit('handleShowMarkPop', 1)
    },
    handleShowAddMemberPop () {
      this.$emit('handleShowAddMemberPop')
    }
  }
}
</script>

<style lang="scss" scoped>
.group-wrap{
  width: 376px;
  height: 325px;
  background: #F9FAFB;
  border-radius: 6px;
  border: 1px solid #F2F2F2;
  padding: 14px 0;
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-right: 20px;
  .id-wrap{
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    box-sizing: border-box;
    padding: 0 14px;
    .group-id{
      flex: 1;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 700;
      color: #202020;
    }
    .go-to-detail{
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #909090;
      cursor: pointer;
    }
  }
  .date-range{
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #909090;
    margin-bottom: 18px;
    box-sizing: border-box;
    padding: 0 14px;
  }
  .sub-title{
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #202020;
    box-sizing: border-box;
    padding: 0 14px;
    margin-bottom: 6px;
  }
  .table-wrap{
    .th-wrap{
      width: 376px;
      height: 50px;
      background: #F6F6F6;
      display: flex;
      .th-item{
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 700;
        color: #202020;
        flex: 1;
        text-align: center;
        &.status{
          flex: 2;
          padding: 0 5px;
        }
      }
    }
    .table-content{
      .tr-item{
        background: #F9FAFB;
        &:nth-child(2n + 1){
          background: #ffffff;
        }
      }
    }
  }
  .handle-wrap{
    margin-top: 14px;
    text-align: center;
    cursor: pointer;
    .svg{
      width: 16px;
      height: 16px;
    }
    .text{
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 700;
      color: #2173F9;
      line-height: 22px;
      vertical-align: middle;
    }
  }
}
</style>
