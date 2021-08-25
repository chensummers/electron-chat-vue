<template>
  <div>
    <div class="title line">
      <img
        src="https://fosunhealth.oss-cn-hangzhou.aliyuncs.com/07500dcce89a4783bff9bdf59cb88df8.png"
        alt=""
      />
      <div class="con_center">
        <div>T-张森测试账号 <span>上海优医邦医院</span></div>
        <p>2021-08-19 17:52:00</p>
      </div>
      <p class="r_state">已完成</p>
    </div>
    <div class="names">患者：徐程乐 <span>女</span> <span>33</span></div>
  </div>
</template>

<script>
export default {};
</script>

<style  lang='scss' scoped>
 .line {
    border-bottom: 1px solid #e5e5e5;
  }
.title {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;

  img {
    width: 40px;
    height: 40px;
  }
  .con_center {
    width: calc(100% - 100px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    margin-left: 10px;
    > div {
      font-size: 16px;
      > span {
        font-size: 12px;
      }
    }
    > p {
      font-size: 12px;
      margin-top: 4px;
      color: #606060;
    }
  }
  .r_state {
    width: 50px;
    text-align: right;
    font-size: 12px;
    color: #B9B9B9;
  }
}
.names {
  height: 40px;
  line-height: 40px;
  text-align: left;
  color: #606060;
  font-size: 18px;
  padding-top: 10px;
  padding-left: 50px;
  display: flex;
  > span {
    margin-left: 20px;
  }
}
</style>