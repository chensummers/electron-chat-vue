<template>
  <div class="tab-wrap not-select">
    <div class="tab-item" :class="selTab == 1 ? 'active' : ''" @click="handleTab(1)">在线<span>({{ '10' }})</span></div>
    <div class="tab-item" :class="selTab == 2 ? 'active' : ''" @click="handleTab(2)">待归档<span>({{ '6' }})</span></div>
    <div class="tab-item" @click="handleTabAllPatient">所有患者</div>
  </div>
</template>

<script>
export default {
  name: 'receptionTab',
  props: {
    tabObj: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      selTab: 1
    }
  },
  methods: {
    handleTab (selTab) {
      this.selTab = selTab
      this.$emit('handleSelTab', selTab)
    },
    handleTabAllPatient () {
      this.$emit('handleTabAllPatient')
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-wrap{
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  height: 30px;
  line-height: 30px;
  display: flex;
  font-size: 14rpx;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 700;
  justify-content: space-between;
  .tab-item{
    cursor: pointer;
    &.active{
      color: #2173F9;
    }
  }
}
</style>
