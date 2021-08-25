<template>
  <div class="list-item-wrap not-select">
    <div class="avatar-wrap">
      <span class="news-num">6</span>
      <!-- <img class="img" src="" alt=""> -->
    </div>
    <div class="info-wrap">
      <div class="base-info-wrap">
        <div class="base-info">
          <div class="name">张名</div>
          <div class="sex-year">
            <div class="sex">男</div>
            <div class="year">34岁</div>
          </div>
        </div>
        <div class="chat-time">
          {{ '10:22' }}
        </div>
      </div>
      <div class="chat-content-wrap">
        <div class="chat-content">你好,医生!</div>
        <div class="clock-wrap">
          <icon-svg icon-class="icon-clock" class="icon-clock"></icon-svg>
          <span class="clock">{{ "45:00" }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listItem'

}
</script>

<style lang="scss" scoped>
.list-item-wrap{
  margin: 20px 0;
  display: flex;
  align-items: center;
  // padding: 8px 0;
  height: 40px;
  cursor: pointer;
  .avatar-wrap{
    width: 40px;
    height: 100%;
    border-radius: 50%;
    background: rgba(33,120,249, .5);
    margin-right: 16px;
    position: relative;
    .news-num{
      position: absolute;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      border-radius: 50%;
      background: #FF303A;
      top: -6px;
      right: -6px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 700;
      color: #FFFFFF;
      transform: scale(0.5);
    }
    .img{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid #000;
    }
  }
  .info-wrap{
    flex: 1;
    align-items: center;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 700;
    color: #202020;
    .base-info-wrap{
      display: flex;
      width: 100%;
      // height: 22px;
      // line-height: 22px; 
      // margin-bottom: 6px;
      font-size: 14px;
      .base-info{
        flex: 1;
        display: flex;
        .name{
          margin-right: 38px;
        }
        .sex-year{
          display: flex;
        }
      }
      .chat-time{
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #909090;
        width: 42px;
      }
    }
    .chat-content-wrap{
      display: flex;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #909090;
      height: 17px;
      line-height: 17px;
      .chat-content{
        flex: 1;
        text-align: left;
      }
      .clock-wrap{
        width: 64px;
        display: flex;
        align-items: center;
        .icon-clock {
          width: 20px;
          height: 20px;
        }
        .clock{
          margin-left: 7px;
        }
      }
    }

  }
}
</style>
