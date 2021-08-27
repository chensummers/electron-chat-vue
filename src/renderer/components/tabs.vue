<template>
  <div class="tab-content-wrap">
    <!-- 最外层tab -->
    <div class="tab-wrap not-select">
      <div
        v-for="item in tabList"
        :key="item.id"
        :class="selTab == item.id ? 'active' : ''"
        @click="handleSelTab(item.id)">{{ item.name }}</div>
    </div>
    <div class="sub-tab-wrap" v-show="selTab==1">
      <div
        v-for="item in subTabList"
        :key="item.id"
        :class="selSubTab1 == item.id ? 'active' : ''"
        @click="handleSubSelTab1(item.id)">{{ item.name }}</div>
    </div>
    <div class="sub-tab-wrap" v-show="selTab==2">
      <div
        v-for="item in quickServiceList"
        :key="item.id"
        :class="selSubTab2 == item.id ? 'active' : ''"
        @click="handleQuickServiceTab(item.id)">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data () {
    return {
      selTab: 1,
      selSubTab1: 1,
      selSubTab2: 1,
      tabList: [
        {
          id: 1,
          name: '客户信息'
        },
        {
          id: 2,
          name: '快捷服务'
        },
        {
          id: 3,
          name: '待办提醒'
        }
      ],
      subTabList: [
        {
          id: 1,
          name: '基础信息'
        },
        {
          id: 2,
          name: '问诊记录'
        },
        {
          id: 3,
          name: '问诊档案'
        },
        {
          id: 4,
          name: '权益信息'
        },
        {
          id: 5,
          name: '订单信息'
        }
      ],
      quickServiceList: [{
        id: 1,
        name: '推荐商品'
      },
      {
        id: 2,
        name: '挂号服务'
      }
      ]
    }
  },
  methods: {
    handleSelTab (selTab) {
      this.selTab = selTab
      this.$emit('handleSelTab', selTab)
    },
    handleSubSelTab1 (selSubTab1) {
      this.selSubTab1 = selSubTab1
      this.$emit('handleSubSelTab1', selSubTab1)
    },
    handleQuickServiceTab (selSubTab2) {
      this.selSubTab2 = selSubTab2
      this.$emit('handleSubSelTab2', selSubTab2)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-content-wrap {
  box-sizing: border-box;
  padding: 0 10px;
  text-align: center;
  .tab-wrap,
  .sub-tab-wrap {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #909090;
    line-height: 20px;
    margin-bottom: 20px;
    div {
      margin-right: 40px;
      cursor: pointer;
      &.active {
        font-weight: 700;
        color: #202020;
      }
    }
  }
  .sub-tab-wrap {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #909090;
    margin-bottom: 10px;
    div {
      width: 117px;
      height: 26px;
      line-height: 26px;
      background: #ffffff;
      border-radius: 21px;
      margin-right: 11px;
      &.active {
        background: #dce8f7;
        border-radius: 21px;
        font-weight: 700;
        color: #2173f9;
      }
    }
  }
}
</style>
