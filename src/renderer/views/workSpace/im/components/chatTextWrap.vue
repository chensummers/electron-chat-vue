<template>
  <div class="chat-wrap">
    <div v-if="content.left" class="chat left">
      <div class="img">
        <img :src="content.img">
      </div>
      <div class="chat-content">
        <div class="txt">{{content.txt}}</div>
      </div>
    </div>
    <div v-else class="chat right">
      <div class="chat-content">
        <!-- 聊天文本 -->
        <div v-if="!content.type" class="txt">{{content.txt}}</div>
        <!-- 商品卡 -->
        <div v-else class="card">
          <div class="card-top">
            <div class="card-left">
              <div class="title">{{cardTitle}}</div>
              <div class="sub-title">有些事情想想难，其实只要行动起来，也就解</div>
            </div>
            <div :class="['card-right', content.type !=1 && 'card-icon']">
              <img :src="cardImg" alt="图片">
            </div>
          </div>
          <div class="detail">查看详情</div>
        </div>
      </div>
      <div class="img">
        <img :src="content.img">
      </div>
    </div>
  </div>
</template>
<script>
import prescriptionImg from "./icons/prescription.png";
import zhuanzhenImg from "./icons/zhuanzhen.png";
import productImg from "./icons/p.png";

export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    cardTitle() {
      if (!this.content.type) return "";
      switch (this.content.type) {
        case 1:
          return this.content.productName;
          break;
        case 2:
          return "处方";
          break;
        case 3:
          return "转诊单";
          break;
      }
    },
    cardImg() {
      if (!this.content.type) return "";
      switch (this.content.type) {
        case 1:
          return productImg;
          break;
        case 2:
          return prescriptionImg;
          break;
        case 3:
          return zhuanzhenImg;
          break;
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.chat-wrap {
  .chat {
    display: flex;
    align-items: flex-start;
    .img {
      width: 52px;
      height: 52px;
      flex: 0 0 52px;
      border-radius: 52px;
      border: 1px solid #ccc;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .chat-content {
      padding: 4px 10px;
      background-color: #f2f5f8;
      color: #000;
      font-size: 16px;
      max-width: 70%;
      min-width: 30px;
      margin-top: 6px;
    //   line-height: 30px;

      .card {
        padding: 10px 0 0 10px;
        width: 300px;
        .card-top {
          display: flex;
          justify-content: space-between;
          padding-bottom: 14px;
          border-bottom: 1px solid #7DB0E9;
          margin-bottom: 6px;
          .card-left {
            flex: 1;
            .title {
              font-size: 18px;
              color: #202020;
              font-weight: bold;
            }
          }
          .card-right {
            width: 80px;
            height: 80px;
            flex: 0 0 80px;
            margin-left: 10px;
            &.card-icon {
                // padding: 20px;
                // box-sizing: border-box;
            }
            img {
                width: 100%;
                height: 100%;
            }
          }
        }
        .detail {
            font-size: 16px;
            color: #2173F9;
        }
      }
    }
    &.left {
      .img {
        margin-right: 14px;
      }
      .chat-content {
        border-radius: 0 24px 24px 24px;
      }
    }
    &.right {
      justify-content: flex-end;
      .img {
        margin-left: 14px;
        margin-right: 5px;
      }
      .chat-content {
        border-radius: 24px 0 24px 24px;
        background-color: #c7e1ff;
      }
    }
  }
}
</style>


