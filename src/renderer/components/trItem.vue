<template>
  <div class="tr-wrap">
    <div class="name item-el">{{ 'kevin' }}</div>
    <div class="status item-el">
      <span>{{ '已激活' }}</span>
      <icon-svg v-if="true" class="svg" :icon-class="'icon-wx'"></icon-svg>
      <icon-svg v-if="false" class="svg" :icon-class="'icon-wx-grey'"></icon-svg>
    </div>
    <div class="role item-el">{{ '角色' }}</div>
    <div class="remark item-el">{{ '备注' }}</div>
    <div class="operate item-el" @click="handleShowMarkPop(item)"><a-button type="link">备注</a-button></div>
  </div>
</template>

<script>
export default {
  name: 'trItem',
  props: {
    itemObj: {
      type: Number,
      default: () => {
        return 1
      }
    }
  },
  data () {
    return {
      key: 'value'
    }
  },
  methods: {
    handleShowMarkPop () {
      // 添加备注
      this.$emit('handleShowMarkPop', this.itemObj)
    }
  }
}
</script>

<style lang="scss" scoped>
.tr-wrap{
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 700;
  color: #202020;
  .item-el{
    flex: 1;
    text-align: center;
    &.status{
      flex: 2;
      display: flex;
      align-items: center;
      padding: 0 5px;
      .svg{
        margin-left: 3px;
        width: 17px;
        height: 14px;
      }
    }
  }
}
</style>
