<template>
  <div class="register-service">
    <div class="content-list">
      <div class="top">
        <div class="title">
          家庭医生服务权益GroupID：123456890，服务卡名称，有效期，户主U
        </div>
        <div class="sub-title">
          <span>挂号权益有效期：2021-05-05至2022-05-06</span>
          <span>包含次数：5</span>
          <span>剩余可用次数：3</span>
          <a-button type="primary" class="newbtn" @click="onNewRegistered">
            新建挂号
          </a-button>
        </div>
      </div>
      <a-table :columns="columns" :data-source="dataList" :pagination="false">
        <a-button type="primary" slot="action" class="apply-back">
          申请退回
        </a-button>
      </a-table>
    </div>
    <!-- <PopUpRegister
      :isShow="isShsow"
      @onClose="onClose"
      :title="title"
    ></PopUpRegister> -->
    <NewCreate :isShow="isShsow" @onClose="onClose"></NewCreate>
  </div>
</template>
<script>
import PopUpRegister from "./registerPopup";
import NewCreate from "./newCreate";
export default {
  name: "quickService",
  components: { PopUpRegister, NewCreate },
  data() {
    return {
      index: 0,
      isShsow: false,
      columns: [
        {
          title: "工单编号",
          dataIndex: "number",
          key: "number"
        },
        {
          title: "类型",
          dataIndex: "type",
          key: "type"
        },
        {
          title: "就诊人",
          dataIndex: "user",
          key: "user"
        },
        {
          title: "创建时间",
          key: "createTime",
          width: "86px",
          dataIndex: "createTime"
        },
        {
          title: "状态",
          key: "status",
          dataIndex: "status"
        },
        {
          title: "最近状态 更新时间",
          width: "86px",
          key: "updataTime",
          dataIndex: "updataTime"
        },
        {
          title: "备注",
          key: "note",
          dataIndex: "note"
        },
        {
          title: "操作",
          key: "operation",
          dataIndex: "",
          scopedSlots: { customRender: "action" }
        }
      ],
      dataList: [
        {
          number: "1234567890",
          type: "挂号",
          user: "王女士",
          createTime: "2021.09.09 18:30:55",
          status: "工单状态",
          updataTime: "2021.09.09 18:30:55",
          note: ""
        }
      ],
      title: ""
    };
  },
  methods: {
    onNewRegistered() {
      this.title = "核销权益失败"; //挂号工单提交成功，请耐心等待运营处理
      this.isShsow = true;
    },
    onClose() {
      this.isShsow = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.register-service {
  position: relative;
  .content-list {
    margin-bottom: 30px;
    .top {
      width: 100%;
      min-height: 100px;
      box-sizing: border-box;
      .title {
        padding: 0 16px;
        min-height: 50px;
        line-height: 50px;
        background: #f6f6f6;
        font-size: 16px;
        font-weight: 400;
        color: #202020;
      }
      .sub-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 16px;
        min-height: 50px;
        line-height: 50px;
        font-size: 14px;
        font-weight: 400;
        color: #202020;
        span {
          margin-right: 50px;
        }
        .newbtn {
          width: 114px;
          height: 32px;
          box-sizing: border-box;
          background: #2173f9;
          border-radius: 2px;
          font-size: 14px;
          font-weight: 400;
          color: #ffffff;
        }
      }
    }
    /deep/ table {
      .ant-table-column-title {
        font-size: 14px;
        font-weight: 400;
        color: #202020;
      }
      .ant-table-row {
        td {
          font-size: 14px;
          font-weight: 400;
          color: #202020;
        }
      }
      .apply-back {
        width: 114px;
        height: 32px;
        background: #2173f9;
        border-radius: 2px;
        font-size: 14px;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
}
</style>
