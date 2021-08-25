<template >
    <div class="header">
        <div class="left">
            <div class="avatar" :class="false ? 'online' : 'offline'">
                <a-avatar>
                    <a-icon slot="icon" type="user"/>
                </a-avatar>
            </div>
            <div class="info">
                <div class="info-name">刘一帆</div>
                <div class="tag">运动医学科</div>
            </div>
        </div>
        <div class="right">
            <button class="btn" :class="false ? 'online' : 'offline'" @click="changeStatus">刘一帆</button>
            <a-dropdown>
                <a-menu slot="overlay">
                    <a-menu-item key="1"><icon-svg style="width: 10px; height: 10px; marginRight: 8px" :icon-class="true ? 'icon-online' : 'icon-offline'"></icon-svg>刘一帆</a-menu-item>
                    <a-menu-item key="2"><icon-svg style="width: 10px; height: 10px; marginRight: 8px" :icon-class="false ? 'icon-online' : 'icon-offline'"></icon-svg>张小小(刘一帆助手)</a-menu-item>
                    <a-menu-item key="3"><icon-svg style="width: 10px; height: 10px; marginRight: 8px" :icon-class="true ? 'icon-online' : 'icon-offline'"></icon-svg>张大大(刘一帆助手)</a-menu-item>
                </a-menu>
                <button class="clinic" :class="false ? 'online' : 'offline'">刘一帆<a-icon type="down" /></button>
                <!-- <button class="clinic-btn" :class="false ? 'online' : 'offline'">刘一帆</button> -->
            </a-dropdown>
            <a-switch checked-children="开" un-checked-children="关" default-checked @onchange="changeClinicStatus"/>
            <!-- <div>
                <icon-svg class="small-down-arrow" icon-class="icon-small-down-arrow"></icon-svg>
            </div> -->
            <icon-svg icon-class="icon-msg"></icon-svg>
            <icon-svg icon-class="icon-setting" @click="showSetupModal"></icon-svg>
            <icon-svg icon-class="icon-logout" @click="close"></icon-svg>
        </div>
        <!-- <a-button type="default" @click="getData">提交</a-button> -->
        <a-modal
            title="设置"
            :visible="showSetup"
            @ok="handleOk"
            @cancel="handleCancel"
            :centered="true"
            :width="420"
            okText="保存"
            cancelText="取消"
        >
            <div class="modal-content">
                <span>同一时间接受患者的最大并发咨询次数</span>
                <a-input-number id="inputNumber" size="small" style="marginLeft: 16px" v-model="consultNum" :min="1" :max="100" @change="onChange" />
            </div>
        </a-modal>
    </div>
</template>
<script>
import { getHospitals } from '@/apis/headerApi'
export default {
  data () {
    return {
        showSetup: false,
        consultNum: 0
    }
  },
  methods: {
    getData () {
      const params = {
        startIdx: 1,
        size: 10,
        query: ''
      }
      getHospitals(params).then(res => {
        console.log('res+++++++++++>' + res)
        if (res.status === 200) {
          this.$router.push({ path: '/login' })
        }
      })
    },
    showSetupModal(){
        this.showSetup = !this.showSetup;
    },
    handleOk(){},
    handleCancel(){
        this.showSetup = !this.showSetup;
    },
    onChange(){},

    // 上下线
    changeStatus(){
        this.$confirm({
            title: '是否要下线?',
            okText: "确定",
            cancelText: "取消",
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    },

    // 开关诊室
    changeClinicStatus(){

    },
    close(){
        this.$router.push({ path: '/login' });
    }
  }
}
</script>
<style lang="scss" scoped>
.header{
    height: 60px;
    line-height: 60px;
    width: 100%;
    background: #2179F9;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    .left{
        display: flex;
        flex-direction: row;
        .avatar{
            position: relative;
            margin: 0 10px 0 20px;
            &.online:before,&.offline:before{
                content:'';
                position: absolute;
                z-index: 10;
                top: 38px;
                left:18px;
                width: 14px;
                height: 14px;
                background: #FF303A;
                border-radius: 50%;
            }
            &.online:before{
                content:'';
                background: #41DA2F;
            }
        }
        .info{
            display: flex;
            flex-direction: row;
            align-items: center;
            color: #ffffff;
            .info-name{
                font-size: 20px;
                font-weight: 500;
                color: #FFFFFF;
            }
            .tag{
                margin-left: 8px;
                width: 101px;
                height: 26px;
                line-height: 28px;
                text-align: center;
                background: rgba(238, 246, 255, 0.2);
                border-radius: 20px;
                border: none;
                font-size: 12px;
            }
        }
    }
    .right{
        width: 520px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        .btn{
            width: 150px;
            height: 36px;
            line-height: 36px;
            background: rgba(238, 246, 255, 0.2);
            border-radius: 20px;
            border: 0px solid #87B7FF;
            color: #ffffff;
            font-size: 18px;
            position: relative;
            &.online:before,&.offline:before{
                content:'';
                position: absolute;
                left:20px;
                width: 10px;
                height: 10px;
                background: #FF303A;
                border-radius: 50%;
                @include transTop50
            }
            &.online:before{
                content:'';
                background: #41DA2F;
            }
        }
        .overlay{
            position: relative;
            &.online:before,&.offline:before{
                content:'';
                position: absolute;
                left:20px;
                width: 10px;
                height: 10px;
                background: #FF303A;
                border-radius: 50%;
                @include transTop50
            }
            &.online:before{
                content:'';
                background: #41DA2F;
            }
        }
        .clinic{
            width: 150px;
            height: 36px;
            line-height: 36px;
            padding-left: 20px;
            background: rgba(238, 246, 255, 0.2);
            border-radius: 20px;
            border: none;
            font-size: 18px;
            color: #FFFFFF;
            position: relative;
            &.online:before,&.offline:before{
                content:'';
                position: absolute;
                left:20px;
                width: 10px;
                height: 10px;
                background: #FF303A;
                border-radius: 50%;
                @include transTop50
            }
            &.online:before{
                content:'';
                background: #41DA2F;
            }
            .anticon-down{
                font-size: 18px;
                margin-left: 8px;
            }
        }
        .ant-switch{
            height: 22px;
            line-height: 24px;
            font-size: 14px;
            min-width: 44px;
            background-color: #cccccc;
        }
        .ant-switch-checked{
            background-color: #41DA2F;
        }
        .svg-icon{
            height: 24px;
            width: 24px;
        }
    }
    .modal-content{
        .ant-input-number{
            margin-left: 16px;
        }
    }
}
</style>
