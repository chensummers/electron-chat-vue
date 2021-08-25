<template>
  <div class="add-member-mask" @click.stop="handleHideAddMemberPop">
    <div class="add-member-content" @click.stop>
      <div class="title">添加成员</div>
      <!-- 添加成员 -->
      <div class="add-member">
        <a-radio-group v-model="checkValue" @change="onChange">
          <a-radio :value="1">
            A
          </a-radio>
          <a-radio :value="2">
            B
          </a-radio>
         </a-radio-group>
      </div>
      <!-- 添加手机号 -->
      <div class="after-enter-phone">

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'addNewMemberPop',
  data () {
    return {
      checkValue: null
    }
  },
  methods: {
    handleHideAddMemberPop () {
      this.$emit('handleHideAddMemberPop')
    },
    onChange (e) {
      console.log('radio checked', e.target.value)
      this.checkValue = e.target.value
    }
  }
}
</script>

<style lang="scss" scoped>
.add-member-mask{
  position: fixed;
  bottom: 0;
  right: 0;
  width: calc(100% - 388px - 649px);
  height: calc(100% - 140px);
  background: rgba(0,0,0,.36);
  z-index: 9;
  padding: 19px 25px 27px;
  box-sizing: border-box;
  .add-member-content{
    width: 70%;
    height: 80%;
    background: #ffffff;
    @include positionCenter;
    padding: 40px;
  }
}
</style>
