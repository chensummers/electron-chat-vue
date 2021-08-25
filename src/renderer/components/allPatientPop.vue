<template>
  <div class="all-patient-mask-wrap" @click.stop="handleHideAllPatientsPop">
    <div class="pop-wrap" @click.stop>
      <icon-svg
        @click.stop="handleHideAllPatientsPop"
        class="close-icon"
        icon-class="icon-close"></icon-svg>
        <div class="title">咨询过我的患者</div>
        <div class="search-wrap">
          <div class="search-item-wrap">
            <div class="search-item">
              <div class="label">用户名</div>
              <div class="item-el">
                <input placeholder="请输入" type="text">
              </div>
            </div>
            <div class="search-item">
              <div class="label">用户标签</div>
              <div class="item-el">
                <a-select default-value="lucy" style="width: 120px" @change="handleChange1">
                  <a-select-option value="jack">
                    Jack
                  </a-select-option>
                  <a-select-option value="lucy">
                    Lucy
                  </a-select-option>
                  <a-select-option value="disabled" disabled>
                    Disabled
                  </a-select-option>
                  <a-select-option value="Yiminghe">
                    yiminghe
                  </a-select-option>
                </a-select>
              </div>
            </div>
          </div>
          <template>
            <div class="search-item-wrap">
              <div class="search-item">
                <div class="label">性别</div>
                <div class="item-el">
                  <a-select default-value="请选择" style="width: 120px" @change="handleChangeSex">
                    <a-select-option value="1">
                      男
                    </a-select-option>
                    <a-select-option value="2">
                      女
                    </a-select-option>
                  </a-select>
                </div>
              </div>
              <div class="search-item">
                <div class="label">权益类型</div>
                <div class="item-el">
                  <a-select default-value="lucy" style="width: 120px" @change="handleChange2">
                    <a-select-option value="jack">
                      Jack
                    </a-select-option>
                    <a-select-option value="lucy">
                      Lucy
                    </a-select-option>
                    <a-select-option value="disabled" disabled>
                      Disabled
                    </a-select-option>
                    <a-select-option value="Yiminghe">
                      yiminghe
                    </a-select-option>
                  </a-select>
                </div>
              </div>
            </div>
          </template>
          <div class="search-item-wrap">
            <div class="search-item">
              <div class="label">用户ID</div>
              <div class="item-el">
                <input placeholder="请输入" type="text">
              </div>
            </div>
            <div class="search-item">
              <div class="label">手机号</div>
              <div class="item-el">
                <input placeholder="请输入" type="number" onkeyup="value=value.replace(/[^\d]/g,'')" autocomplete="off" maxlength="11">
              </div>
            </div>
          </div>
          <div class="search-item-wrap">
            <div class="search-item">
              <div class="label">诊断标签</div>
              <div class="item-el">
                <input placeholder="请输入" type="text">
              </div>
            </div>
            <div class="search-item">
              <div class="label">最新咨询时间</div>
              <div class="item-el">
                <a-range-picker @change="onHandleDate" />
              </div>
            </div>
          </div>
          <div class="btn-wrap">
              <a-button type="primary">重置</a-button>
              <a-button type="primary">查询</a-button>
              <a-button type="link">收起</a-button>
          </div>
        </div>
        <div class="table-wrap">
          <div class="tool-bar-wrap">
            <div class="tab-title-wrap">患者列表</div>
            <div class="btn-wrap" v-show="false">
              <a-button type="primary">批量发送消息</a-button>
              <a-button type="primary">批量推荐商品</a-button>
              <a-button type="primary">批量导出</a-button>
            </div>
          </div>
          <a-table
            :columns="columns"
            :data-source="data"
            border="border"
            :pagination="{ pageSize: 4 }"
            size="middle"
            :scroll="{ x: 'calc(1500px + 50%)', y: 300 }"
          >
            <a-button type="link" slot="operation">发送消息</a-button>
            <!-- <a slot="action" slot-scope="text" href="javascript:;">推荐商品</a> -->
          </a-table>
        </div>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: '用户ID',
    dataIndex: 'userID',
    align: 'center',
    width: '10%',
    scopedSlots: { customRender: 'userID' }
  },
  {
    title: '用户名',
    dataIndex: 'userName',
    width: '10%',
    align: 'center',
    scopedSlots: { customRender: 'userName' }
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    width: '10%',
    align: 'center',
    scopedSlots: { customRender: 'avatar' }
  },
  {
    title: '性别',
    dataIndex: 'sex',
    width: '10%',
    align: 'center',
    scopedSlots: { customRender: 'sex' }
  },
  {
    title: '用户标签',
    dataIndex: 'tag1',
    width: '12%',
    align: 'center',
    scopedSlots: { customRender: 'tag1' }
  },
  {
    title: '诊断标签',
    dataIndex: 'tag2',
    width: '12%',
    align: 'center',
    scopedSlots: { customRender: 'tag2' }
  },
  {
    title: '权益类型',
    dataIndex: 'type',
    width: '12%',
    align: 'center',
    scopedSlots: { customRender: 'type' }
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    width: '15%',
    align: 'center',
    scopedSlots: { customRender: 'phone' }
  },
  {
    title: '最后一次咨询时间',
    dataIndex: 'lastDate',
    width: '20%',
    align: 'center',
    scopedSlots: { customRender: 'lastDate' }

  },
  {
    title: '操作',
    dataIndex: 'operation',
    fixed: 'right',
    scopedSlots: { customRender: 'operation' }
  }
]

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    userID: '5023432',
    userName: 'John Brown',
    avatar: '',
    sex: '男',
    tag1: '标签一',
    tag2: '标签二',
    type: '类型',
    lastDate: '2021-06-30 07:30:23'
  })
}
export default {
  name: 'allPatientPop',
  data () {
    this.cacheData = data.map(item => ({ ...item }))
    return {
      data,
      columns
    }
  },
  methods: {
    handleHideAllPatientsPop () {
      this.$emit('handleHideAllPatientsPop')
    },
    onHandleDate (date, dateString) {
      console.log(date, dateString)
    },
    handleChangeSex () {},
    handleChange1 () {},
    handleChange2 () {}

  }
}
</script>

<style lang="scss" scoped>
.all-patient-mask-wrap{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.36);
  z-index: 9;
  padding: 19px 25px 27px;
  box-sizing: border-box;
  .pop-wrap{
    width: 80%;
    height: 80%;
    overflow: auto;
    background: #F6F6F6;
    box-shadow: 0px 12px 48px 16px rgba(0, 0, 0, 0.03), 0px 9px 28px 0px rgba(0, 0, 0, 0.05), 0px 6px 16px -8px rgba(0, 0, 0, 0.08);
    border-radius: 6px;
    @include positionCenter;
    .close-icon{
      position: absolute;
      top: 19px;
      right: 19px;
    }
    .title{
      text-align: center;
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 700;
      color: #202020;
      padding: 41px 0 23px;
      line-height: 1em;
    }
    .search-wrap{
      width: 1041px;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 32px 22px;
      background: #ffffff;
      .search-item-wrap{
        display: flex;
        align-items: center;
        flex: 1;
        margin-bottom: 24px;
        .search-item{
          display: flex;
          align-items: center;
          height: 40px;
          line-height: 40px;
          &:nth-child(2n+1){
            margin-right: 90px;
          }
          .label{
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #202020;
            width: 120px;
          }
          .item-el{
            width: 300px;
            height: 40px;
            background: #F6F6F7;
            border-radius: 3px;
            input{
              width: 300px;
              background: #F6F6F7;
              border-radius: 3px;
              padding: 5px 17px;
              height: 40px;
              line-height: 30px;
            }
            /deep/.ant-select{
              width: 100%!important;
              .ant-select-selection{
                border: none;
                background: #F6F6F7;
              }
            }
            /deep/.ant-calendar-picker{
              .ant-calendar-picker-input{
                border: none;
                background: #F6F6F7;
              }
            }
          }
        }
      }
      .btn-wrap{
        text-align: right;
        button{
          margin-left: 20px;
        }
      }
    }
    .table-wrap{
      width: 1041px;
      height: 444px;
      box-sizing: border-box;
      padding: 12px 25px;
      margin: 10px auto 0;
      background: #ffffff;
      .tool-bar-wrap{
        display: flex;
        align-items: center;
        .tab-title-wrap{
          flex: 1;
        }
        .btn-wrap{
          button{
            margin-left: 20px;
          }
        }
      }

    }
  }
}
</style>
