<template>
  <div class="records">
    <h5>当前问诊</h5>
    <div class="currery">
      <div class="title line">
        <img
          src="https://fosunhealth.oss-cn-hangzhou.aliyuncs.com/07500dcce89a4783bff9bdf59cb88df8.png"
          alt=""
        />
        <div class="con_center">
          <div>T-张森测试账号 <span>上海优医邦医院</span></div>
          <p>2021-08-19 17:52:00</p>
        </div>
        <p class="r_state">待接诊</p>
      </div>
      <div class="names">患者：徐程乐 <span>女</span> <span>33</span></div>
      <div class="btns">
        <a-button class="leftBtn"> 写小节 </a-button>
        <a-button> 开处方 </a-button>
      </div>
    </div>
    <div class="write">
      <div class="write_one">
        <h5>咨询摘要</h5>
        <div class="write_con">
          <a-textarea
            placeholder="请输入"
            maxlength="1000"
            v-model="summaryList.a"
            allow-clear
            @change="onChangeA"
            :autoSize="autoSize"
            :resize="resize"
          />
          <p class="textLang">{{ remark.length }}/1000</p>
        </div>
      </div>
      <div class="write_one">
        <h5>拟诊结果</h5>
        <div class="write_con">
          <a-textarea
            placeholder="请输入"
            maxlength="1000"
            v-model="summaryList.b"
            allow-clear
            @change="onChangeB"
            :autoSize="autoSize"
            :resize="resize"
          />
          <p class="textLang">{{ remark.length }}/1000</p>
        </div>
        <div class="btns">
          <a-button class="leftBtn"> 取消 </a-button>
          <a-button type="primary"> 提交 </a-button>
        </div>
      </div>
      <div class="write_one">
        <h5>总结建议</h5>
        <div class="write_con">
          <a-textarea
            placeholder="请输入"
            maxlength="1000"
            v-model="summaryList.c"
            allow-clear
            @change="onChangeC"
            :autoSize="autoSize"
            :resize="resize"
          />
          <p class="textLang">{{ remark.length }}/1000</p>
        </div>
      </div>
    </div>

    <h5 class="historyTop">历史问诊</h5>
    <div class="lists">
      <div class="list" v-for="(item, index) in 2" :key="index">
        <record-title></record-title>
        <div class="histexts">
          <span>咨询摘要：</span>
          孟晚舟引渡案的司法听证在今天结束了，法官将会在10月21日宣布裁决结果。路透社说
        </div>
        <div class="histexts">
          <span>拟诊结果：</span>
          但孟晚舟的案子已经持续了三年。加拿大不列颠哥伦比亚省的大法官霍姆斯（Heather
          Holmes）
        </div>
        <div class="histexts">
          <span>总结建议：</span>
          需要决定，孟晚舟案件是否符合双重犯罪标准？也就是说孟晚舟受到的指控在加拿大是否被视
        </div>
        <div class="btns">
          <a-button class="leftBtn" @click="showModal()"> 聊天记录</a-button>
          <a-button @click="showModal1()"> 处方记录</a-button>
        </div>
      </div>
    </div>
    <a-modal
      v-model="visible"
      title="聊天记录"
      centered
      width="700px"
      :footer="null"
    >
      <div class="chat">
        <div class="chatList" v-for="(item, index) in list" :key="index">
          <h5 class="times">
            <p>{{ item.time }}</p>
            <span>{{ item.name }}</span>
          </h5>
          <div class="chatCon">
            <div class="chatText" v-if="item.type === 1">{{ item.text }}</div>
            <div
              class="chatAudio"
              v-if="item.type === 2"
              @click="autoPlay(index)"
            >
              <audio
                v-if="item.type === 2"
                :ref="'myaudio' + index"
                src="@/assets/record/horse.ogg"
                controls="controls"
                hidden="true"
                @ended="overPlay(index)"
              ></audio>
              <!-- loop="false" -->
              <span>{{ item.timePlying ? item.timePlying : "" }}"</span>
              <icon-svg
                class=""
                v-if="!item.play"
                icon-class="icon-speech"
              ></icon-svg>
              <img
                class="playing"
                v-else
                src="@/assets/record/playing.gif"
              />
            </div>

            <img
              v-if="item.type === 3"
              src="@/assets/record/chat.jpg"
              alt=""
            />
            <video
              v-if="item.type === 4"
              width="200"
              src="@/assets/record/26d3653dd546d8f756d0374ae5ec8b44.mp4"
              controls="controls"
            >
              <!-- <source src="movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" /> -->
            </video>
          </div>
        </div>
      </div>
    </a-modal>
    <a-modal v-model="visible1" centered width="600px" :footer="null">
      <div class="prescribed">
        <div class="top">
          <h4>银川风友汇互联网医院处方筏</h4>
          <span>普通处方</span>
        </div>
        <div class="base">
          <p>NO：9988566523662263</p>
          <p>日期：2021-08-23 16:52:00</p>
          <p>姓名：吕凯坤 &nbsp; 性别：男 &nbsp; 年龄：105</p>
          <p>科别：全科</p>
          <p>疾病诊断：血小班减少症</p>
        </div>
        <div class="drug">
          <h3>Rp：</h3>
          <div class="drug_detail">
            <div class="drug_name">
              <h3>孙可欣 &nbsp;马来酸阿伐曲泊帕片</h3>
              <h4>20mg*15片 20mg*15片</h4>
              <p>用法：口服 &nbsp; 每天三次 &nbsp; 一片/1次</p>
            </div>
            <span>x1</span>
          </div>
        </div>
        <div class="result">
          <p><span>医师</span>:</p>
          <p><span>审核</span>:</p>
          <p><span>调配</span>:</p>
          <p><span>核对/发药</span>:</p>
          <p><span>金额</span>:</p>
          <h5>注：处方仅当日有效；服药期间如有不适；请及时到医院就诊</h5>
        </div>
      </div>
    </a-modal>
    <div>
      <a-button v-for="(item,index) in 3" :key='index' @click="typeIndex=item">{{item}}</a-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "consultationRecords",
  data() {
    return {
      autoSize: { minRows: 7, maxRows: 7 },
      typeIndex:1,
      remark: "", // 咨询摘要
      resize: false,
      visible: false,
      visible1: false,
      audioIndex: 0,
      list: [
        {
          time: "2021-08-23 14:52:00",
          type: 1,
          name: "吕不韦",
          text: "宝贝，你老公今晚在家吗注：处方仅当日有效；服药期间如有不适；请及时到医院就诊宝贝，你老公今晚在家吗注：处方仅当日有效；服药期间如有不适；请及时到医院就诊",
          chatType: 1,
          imgUrl: "",
          audioUrl: "",
          videoUrl: "",
        },
        {
          time: "2021-08-23 15:52:00",
          type: 3,
          name: "赵姬",
          text: "我老公今天出去，晚上你过来吗",
          chatType: 2,
          imgUrl: "",
          audioUrl: "",
          videoUrl: "",
        },
        {
          time: "2021-08-23 17:52:00",
          type: 2,
          name: "吕不韦",
          text: "嗯嗯，我这就到，你等我",
          chatType: 1,
          imgUrl: "",
          audioUrl: "",
          videoUrl: "",
        },
        {
          time: "2021-08-23 16:52:00",
          type: 2,
          name: "吕不韦",
          text: "嗯嗯，我这就到，你等我",
          chatType: 1,
          imgUrl: "",
          audioUrl: "",
          videoUrl: "",
        },
        {
          time: "2021-08-23 17:52:00",
          type: 4,
          name: "吕不韦",
          text: "嗯嗯，我这就到，你等我",
          chatType: 1,
          imgUrl: "",
          audioUrl: "",
          videoUrl: "",
        },
        {
          time: "2021-08-23 17:52:00",
          type: 4,
          name: "吕不韦",
          text: "嗯嗯，我这就到，你等我",
          chatType: 1,
          imgUrl: "",
          audioUrl: "",
          videoUrl: "",
        },
      ],
    };
  },
  mounted() {
    // this.$store.dispatch('SET_SUMMARY',[4,5,6])
    setTimeout(() => {
      console.log("this.state", this.$store.state.summary);
    }, 2000);
  },
  computed: {
    summaryList() {
      var list = this.$store.state.summary;
      list = list.filter((im) => {
        return im.id === this.typeIndex;
      });
      return list[0];
    },
  },
  methods: {
    onChangeA(e) {
      console.log("e", e.target.value);
    },
    onChangeB(e) {
      console.log("e", e);
    },
    onChangeC(e) {
      console.log("e", e);
    },
    showModal() {
      //  this.autoTime(1)
      // console.log("refs",this.$refs.au)
      this.visible = true;
      setTimeout(() => {
        this.list.forEach((item, idx) => {
          if (item.type === 2) {
            let myAuto = "myaudio" + idx;
            myAuto = this.$refs[myAuto][0];
            this.list[idx].timePlying = Math.ceil(myAuto.duration);
            this.$forceUpdate();
            console.log("myAuto" + idx, myAuto.duration);
          }
        });
      }, 200);
    },
    handleOk(e) {
      this.visible = false;
    },
    showModal1() {
      this.visible1 = true;
    },
    handleOk1(e) {
      this.visible1 = false;
    },
    // 播放语音
    autoPlay(index) {
      this.audioIndex = index;

      this.list.forEach((item, idx) => {
        if (item.type === 2) {
          let myAuto = "myaudio" + idx;
          myAuto = this.$refs[myAuto][0];

          console.log("myAuto", myAuto.duration);
          if (idx === index) {
            if (myAuto.paused) {
              // 切换播放中的css样式
              myAuto.load(); //音频重新加载，重新播放
              myAuto.play();
              this.list[idx].play = true;
              this.$forceUpdate();
            } else {
              myAuto.pause();
            }
          } else {
            myAuto.pause();
            this.list[idx].play = false;
            this.$forceUpdate();
          }
        }
      });
    },
    // 播放完成
    overPlay(index) {
      this.list[index].play = false;
      this.$forceUpdate();
    },
    // playng(e,index){
    //    this.list[index].play=false;
    //       this.$forceUpdate();
    // },
    // 获取音频时长
    autoTime(index) {
      var myAuto = document.getElementById("myaudio" + index);
      console.log("myAutoTIme", myAuto);
      //  return Math.cell(myAuto.duration)
      //  return index
    },
  },
};
</script>
<style scoped lang="scss">
.records {
  // width: calc(100vw - 428px - 649px - 40px);
  background: #ffffff;
  // padding: 20px;
  box-sizing: border-box;
  color: #202020;
  overflow-y: auto;
  font-family: PingFangSC-Medium, PingFang SC;
  padding-bottom: 132px;
  h5 {
    font-size: 18px;
    font-weight: bold;
  }
  .line {
    border-bottom: 1px solid #e5e5e5;
  }
  .currery {
    width: 491px;
    height: 200px;
    padding: 20px;
    margin-bottom: 23px;
    margin-top: 12px;
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 0px 20px 0px rgba(242, 248, 253, 1);
    border-radius: 6px;
    border: 1px solid #f6f6f6;
    h5 {
      text-align: left;
      font-size: 20px;
      margin-bottom: 20px;
    }
    .title {
      display: flex;
      justify-content: space-between;
      padding-bottom: 20px;

      img {
        width: 52px;
        height: 52px;
      }
      .con_center {
        width: calc(100% - 100px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
        margin-left: 15px;
        > div {
          font-size: 18px;
          > span {
            font-size: 16px;
          }
        }
        > p {
          font-size: 14px;
          margin-top: 4px;
          color: #606060;
        }
      }
      .r_state {
        width: 50px;
      }
    }
  }
  .names {
    height: 40px;
    line-height: 40px;
    text-align: left;
    color: #606060;
    font-size: 18px;
    padding-top: 10px;
    display: flex;
    > span {
      margin-left: 20px;
    }
  }
  .btns {
    text-align: right;
    margin-top: 20px;
    .leftBtn {
      margin-right: 15px;
    }
  }
}
.write {
  width: 100%;
  margin-top: 12px;
  display: flex;
  .write_one {
    margin-right: 10px;
    flex: 1;
    box-sizing: border-box;
    h5 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 12px;
    }
    .write_con {
      // width: 100%;
      min-width: 248px;
      width: 248px;
      height: 145px;
      background: #f6f6f6;
      border-radius: 2px;
      background: #e5e5e5;
      position: relative;
    }
    .textLang {
      position: absolute;
      bottom: 0px;
      right: 15px;
    }
  }
  .btns {
    margin-top: 40px;
    .leftBtn {
      margin-right: 20px;
    }
  }
}
.historyTop {
  margin-top: 20px;
}
.lists {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  .list {
    margin-right: 11px;
    width: 366px;
    padding: 20px;
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 0px 0px 20px 0px rgba(242, 248, 253, 1);
    border-radius: 6px;
    border: 1px solid #f6f6f6;
    .histexts {
      span {
        color: #202020;
        font-weight: bold;
        font-size: 14px;
      }
      margin-top: 16px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      text-align: justify;
      line-height: 20px;
      color: #606060;
    }
  }
}
.chat {
  height: 800px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  video {
    border-radius: 4px;
  }
  .chatList {
    margin-bottom: 20px;
    display: flex;
    .times {
      display: flex;
      > p {
        width: 170px;
      }
    }
    .chatText {
      background: #c7e1ff;
      padding: 10px 20px;
      max-width: 400px;
      border-radius: 0px 26px 26px 26px;
    }
    .chatAudio {
      width: 200px;
      height: 53px;
      background: #c7e1ff;
      border-radius: 0px 26px 26px 26px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      box-sizing: border-box;
      cursor: pointer;
      .playing {
        width: 24px;
        height: 24px;
        transform: rotate(180deg);
        // transform: translateX(-15px);
      }
    }
    h5 {
      margin-right: 20px;
      font-size: 16px;
      font-weight: bold;
    }
    img {
      width: 200px;
      height: auto;
      border-radius: 4px;
    }
  }
}
.prescribed {
  // height: 900px;
  padding: 0 30px;
  padding-bottom: 50px;
  box-sizing: border-box;
  color: #333333;
  .top {
    position: relative;
    border-bottom: 1px solid #dddddd;
    padding-bottom: 20px;
    h4 {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      width: 200px;
      line-height: 35px;
      margin: 0 auto;
    }
    span {
      position: absolute;
      width: 70px;
      height: 70px;
      font-size: 16px;
      padding: 10px;
      box-sizing: border-box;
      line-height: 25px;
      text-align: center;
      right: 0;
      top: 0;
      border: 1px solid #ddd;
    }
  }
  .base {
    margin-top: 15px;
    padding-bottom: 30px;
    border-bottom: 1px solid #dddddd;
    font-size: 16px;
    line-height: 30px;
  }
  .drug {
    padding-bottom: 15px;
    border-bottom: 1px solid #dddddd;
    > h3 {
      font-size: 24px;
      margin-top: 20px;
    }
    .drug_detail {
      display: flex;
      justify-content: space-between;
      .drug_name {
        h3 {
          font-size: 20px;
          font-weight: bold;
          line-height: 40px;
        }
        h4 {
          font-size: 18px;
          font-weight: bold;
          line-height: 40px;
        }
        p {
          font-size: 16px;
          line-height: 30px;
        }
      }
      > span {
        width: 50px;
        text-align: right;
        font-size: 18px;
      }
    }
  }
  .result {
    margin-top: 15px;
    p {
      font-size: 16px;
      line-height: 30px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      color: #333333;
      > span {
        width: 80px;
      }
    }
    h5 {
      color: #dddddd;
      margin-top: 15px;
    }
  }
}
</style>
