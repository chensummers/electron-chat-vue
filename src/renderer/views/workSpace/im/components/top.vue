<template>
    <div class="top">
        <span class="name">
            用户 <label> “{{userInfo.name||'张三'}}” </label>该用户来自<label>{{userInfo.channel||'微信'}}</label>
        </span>
        <span>userId：{{userInfo.userId||'2836462846739'}}</span>
        <span>问诊单号：{{userInfo.orderId||'2836462846739'}}</span>
        <span>用户咨询专家：{{userInfo.user ||'刘一帆'}}</span>
    </div>
</template>
<script>
export default {
  props: {
    userInfo: Object
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
    .top {
        font-size: 16px;
        color: #202020;
        padding: 0 20px;
        line-height: 40px;
        background: #F2F5F8;
        text-align: left;
        // border-radius: 6px;
        // margin-left: 20px;
        display: flex;
        justify-content: space-between;
        // span+span {
        //     margin-left: 10px;
        // }
        label{
            color: #2173F9;
        }
    }
</style>
