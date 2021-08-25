<template>
  <div class="sel-title-wrap not-select">
    <div class="wrap" v-show="titleType == 1">
      <icon-svg
        class="svg"
        v-show="toggleType1"
        icon-class="icon-down-arrow"></icon-svg>
      <icon-svg
        class="svg"
        v-show="!toggleType1"
        icon-class="icon-right-arrow"></icon-svg>
        <div class="sel-title">
          家庭医生（{{ selTitleObj.online1 }}人）
        </div>
    </div>
    <div class="wrap" v-show="titleType == 2">
      <icon-svg
        class="svg"
        v-show="toggleType2"
        icon-class="icon-down-arrow"></icon-svg>
      <icon-svg
        class="svg"
        v-show="!toggleType2"
        icon-class="icon-right-arrow"></icon-svg>
        <div class="sel-title">
          快速问诊（{{ selTitleObj.online2 }}人）
        </div>
    </div>
    <div class="wrap" v-show="titleType == 3">
      <icon-svg
        class="svg"
        v-show="toggleType3"
        icon-class="icon-down-arrow"></icon-svg>
      <icon-svg
        class="svg"
        v-show="!toggleType3"
        icon-class="icon-right-arrow"></icon-svg>
        <div class="sel-title">
          家庭医生（{{ selTitleObj.offline1 }}人）
        </div>
    </div>
    <div class="wrap" v-show="titleType == 4">
      <icon-svg
        class="svg"
        v-show="toggleType4"
        icon-class="icon-down-arrow"></icon-svg>
      <icon-svg
        class="svg"
        v-show="!toggleType4"
        icon-class="icon-right-arrow"></icon-svg>
        <div class="sel-title">
          快速问诊（{{ selTitleObj.offline2 }}人）
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selTiele',
  props: {
    titleType: {
      type: Number,
      default: () => {
        return 1
      }
    },
    selTitleObj: {
      type: Object,
      default: () => {
        return 1
      }
    },
    toggleType1: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    toggleType2: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    toggleType3: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    toggleType4: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sel-title-wrap{
  height: 30px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 700;
  color: #202020;
  line-height: 30px;
  cursor: pointer;
  .wrap{
    display: flex;
    align-items: center;
    .svg{
      margin-right: 10px;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
