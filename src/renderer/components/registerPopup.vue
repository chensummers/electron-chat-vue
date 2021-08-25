<template>
  <div class="register-popup" v-if="isShow">
    <div class="mask" v-if="isShow" @click="onClose"></div>
    <div class="verification">
      <div class="title">{{ title }}</div>
      <a-button class="close" @click="onClose">关闭</a-button>
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
    },
    title: {
      type: String,
      default: ""
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
  }
  .verification {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 342px;
    height: 182px;
    background: #fff;
    border-radius: 5px;
    .title {
      font-size: 18px;
    }
    .close {
      margin-top: 40px;
    }
  }
}
</style>
