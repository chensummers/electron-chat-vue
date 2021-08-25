<template>
  <div class="mark-pop-mask" @click.stop="handleHideMarkPop">
    <div class="mark-content" @click.stop>
      <div class="title">编辑备注</div>
      <div class="mark-input">
        <input type="text">
      </div>
      <div class="btn-wrap">
        <a-button type="default" @click="handleHideMarkPop">取消</a-button>
        <a-button type="primary">保存</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'markPop',
  methods: {
    handleHideMarkPop () {
      this.$emit('handleHideMarkPop')
    }
  }
}
</script>

<style lang="scss" scoped>
.mark-pop-mask{
  position: fixed;
  bottom: 0;
  right: 0;
  width: calc(100% - 388px - 649px);
  height: calc(100% - 140px);
  background: rgba(0,0,0,.37);
  z-index: 2;
  .mark-content{
    width: 360px;
    height: 240px;
    background: #ffffff;
    border-radius: 15px;
    @include positionCenter;
    box-sizing: border-box;
    padding: 30px 20px;
    .title{
      text-align: center;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 700;
      color: #202020;
      margin-bottom: 30px;
    }
    .mark-input{
      input{
        display: block;
        width: 100%;
        height: 36px;
        line-height: 36px;
        border: 1px solid #d8d8d8;
        border-radius: 8px;
        margin-bottom: 30px;
      }
    }
    .btn-wrap{
      text-align: center;
      button{
        margin: 0 5px;
      }
    }
  }
}
</style>
