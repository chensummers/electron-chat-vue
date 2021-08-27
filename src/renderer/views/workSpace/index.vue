<template>
  <div class="right-content-wrap">
    <work-space-top :userInfo="userInfo"></work-space-top>
    <div class="right-content">
      <div class="im-wrap">
        <chat></chat>
      </div>
    </div>
  </div>
</template>
<script>
import WorkSpaceTop from './im/components/top.vue'
import Chat from './im'
export default {
  data () {
    return {
      userInfo: {},
    }
  },
  components: {
    WorkSpaceTop,
    Chat,
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
.right-content-wrap {
  width: calc(100% - #{$leftSideWidth});
  min-width: calc(100% - #{$leftSideWidth});
  min-height: 400px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  box-sizing: border-box;
  .right-content {
    
    height: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    .im-wrap {
      flex: 1;
    }
  }
}
</style>
