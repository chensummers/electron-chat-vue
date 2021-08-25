<template>
  <div class="register-popup" v-if="isShow">
    <div class="mask" v-if="isShow" @click="onClose"></div>
    <div class="create-new">
      <div class="title">
        新建挂号
        <a-icon class="close" @click="onClose" type="close" />
      </div>
      <div class="select-peopel">
        <p class="sub-title">请选择需要挂号的家庭成员就诊人</p>
      </div>
      <div class="btn">
        <a-button @click="onClose">取消</a-button>
        <a-button type="primary" class="next"> 下一步</a-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // name: "",
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onClose() {
      this.$emit("onClose");
    }
  }
};
</script>
<style lang="scss" scoped>
.register-popup {
  .mask {
    position: fixed;
    top: 140px;
    right: 0;
    width: 47%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 9;
  }
  .create-new {
    width: 500px;
    height: 300px;
    background: #fff;
    z-index: 19;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;

    .title {
      position: relative;
      font-size: 20px;
      font-weight: 600;
      border-bottom: 1px solid #eeeeee;
      padding: 10px 30px;
      .close {
        position: absolute;
        right: 20px;
      }
    }
    .select-peopel {
      display: flex;
      flex-direction: column;
      align-items: center;
      .sub-title {
        margin-top: 10px;
        font-size: 14px;
      }
    }
    .btn {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 30px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .next {
        margin-left: 20px;
      }
    }
  }
}
</style>
